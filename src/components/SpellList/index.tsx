import { SpellCard } from '../SpellCard';
import { TypeSpell } from '../../types';
import { Loader } from '../Loader';

export default function SpellList({ spellList }: { spellList: TypeSpell[] }) {
  return (
    <div className="grid place-items-center w-full">
      {spellList.length > 0 ? (
        <div className="grid w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {spellList?.map((spell: TypeSpell) => (
            <SpellCard key={spell.index} spell={spell} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
