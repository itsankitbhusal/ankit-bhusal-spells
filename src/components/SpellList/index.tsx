import { SpellCard } from '../SpellCard';
import { TypeSpell } from '../../types';
import { Loader } from '../Loader';
import { useSpellContext } from '../../hooks/useSpellContext';
import { ALL, FAV } from '../../constants';

export default function SpellList({ render }: { render: 'fav' | 'all' }) {
  const { loading, error, spellList, favSpells } = useSpellContext();

  if (loading) {
    return (
      <div className="grid place-items-center w-full">
        <Loader />;
      </div>
    );
  }

  if (error instanceof Error) {
    return <p className="my-4 text-center">{error.message}</p>;
  }

  const renderSpells = render === ALL ? spellList : favSpells;
  const noDataFound = render === FAV && favSpells.length === 0;

  if (renderSpells?.length === 0 && !noDataFound) {
    return (
      <div className="grid place-items-center w-full">
        <Loader />;
      </div>
    );
  }

  if (noDataFound) {
    return <p className="my-4 text-center">No data found!</p>;
  }

  return (
    <div className="grid place-items-center w-full">
      <div className="grid w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {renderSpells?.map((spell: TypeSpell) => (
          <SpellCard key={spell.index} spell={spell} />
        ))}
      </div>
    </div>
  );
}
