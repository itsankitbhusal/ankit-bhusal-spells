import { Link } from 'react-router-dom';
import { typeSpell } from '../../types';

export const SpellCard = ({ spell }: { spell: typeSpell }) => {
  return (
    <div
      className=" bg-blue-200 rounded p-2 h-20 w-full grid-flow-dense hover:bg-blue-300 transition-all flex-wrap"
      key={spell.index}
    >
      <Link to={`spell-details?spell=${spell?.index}`}>
        <h2 className=" font-bold text-xl line-clamp-1">{spell.name}</h2>
      </Link>
      <div>
        Level:
        <span className=" font-bold">{' ' + spell.level}</span>
      </div>
    </div>
  );
};
