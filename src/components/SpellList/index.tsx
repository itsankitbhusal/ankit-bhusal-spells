import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { fetchSpellsAPI } from '../../api';
import { SpellCard } from '../SpellCard';
import { typeSpell, typeSpellList } from '../../types';

export default function SpellList() {
  const [spellList, setSpellList] = useState<typeSpell[]>([]);

  const fetchSpellsList = async () => {
    try {
      const data: typeSpellList = await fetchSpellsAPI();
      setSpellList(data?.results);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Something went wrong!!');
      }
    }
  };
  // fetch the list of spells
  useEffect(() => {
    fetchSpellsList();
  }, []);
  return (
    <div className=" ">
      <div className=' my-16'>
        <h1 className=' font-bold text-3xl text-center'>List of all the available Spells</h1>
      </div>
      <div className='grid place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {spellList.length > 0 &&
          spellList?.map((spell: typeSpell) => <SpellCard spell={spell} />)}
      </div>
    </div>
  );
}
