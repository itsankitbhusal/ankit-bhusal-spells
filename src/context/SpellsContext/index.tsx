import { createContext, useEffect, useState } from 'react';

import React from 'react';
import { TypeSpell, TypeSpellContext, TypeSpellList } from '../../types';
import { fetchSpellsAPI } from '../../api';
import { toast } from 'react-toastify';
import {
  getFavFromLocalStorage,
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

  const readLocalFav = () => {
    const favSpellsFromLocal = getFavFromLocalStorage();
    if (favSpellsFromLocal) {
      setFavSpells(favSpellsFromLocal);
    }
  };

  const fetchSpellsList = async () => {
    try {
      const data: TypeSpellList = await fetchSpellsAPI();
      setSpellList(data?.results);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Something went wrong!');
      }
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
      }}
    >
      {children}
    </SpellContext.Provider>
  );
}
