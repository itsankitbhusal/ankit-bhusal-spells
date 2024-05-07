import { createContext, useEffect, useState } from 'react';

import React from 'react';
import { TypeSpell, TypeSpellContext, TypeSpellList } from '../../types';
import { fetchSpellsAPI } from '../../api';
import { toast } from 'react-toastify';
import {
  getFavFromLocalStorage,
  removeLocalStorageItem,
  saveFavToLocalStorage,
} from '../../utils/localStorage';

export const SpellContext = createContext<TypeSpellContext | null>(null);

export default function SpellsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [spellList, setSpellList] = useState<TypeSpell[]>([]);
  const [favSpells, setFavSpells] = useState<TypeSpell[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | unknown>();

  const readLocalFav = () => {
    setLoading(true);
    try {
      const favSpellsFromLocal = getFavFromLocalStorage();
      if (favSpellsFromLocal) {
        setFavSpells(favSpellsFromLocal);
      }
    } catch (error) {
      setError(error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSpellsList = async () => {
    try {
      setLoading(true);
      const data: TypeSpellList = await fetchSpellsAPI();
      setSpellList(data?.results);
    } catch (error) {
      setError(error);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Something went wrong!');
      }
    } finally {
      setLoading(false);
    }
  };

  // fetch the list of spells
  useEffect(() => {
    fetchSpellsList();
    readLocalFav();
  }, []);

  // save fav on local storage
  useEffect(() => {
    if (favSpells?.length > 0) {
      saveFavToLocalStorage(favSpells);
    } else {
      removeLocalStorageItem();
    }
  }, [favSpells, setFavSpells]);

  const addToFavSpells = (spell: TypeSpell) => {
    setFavSpells((prev: TypeSpell[]) => [...prev, spell]);
  };

  const addToSpellList = (spells: TypeSpell[]) => {
    setSpellList((prev: TypeSpell[]) => [...prev, ...spells]);
  };
  const removeFromFavSpells = (index: string) => {
    setFavSpells((prev) => prev.filter((spell) => spell.index !== index));
  };

  return (
    <SpellContext.Provider
      value={{
        favSpells,
        addToFavSpells,
        spellList,
        addToSpellList,
        removeFromFavSpells,
        loading,
        error,
      }}
    >
      {children}
    </SpellContext.Provider>
  );
}
