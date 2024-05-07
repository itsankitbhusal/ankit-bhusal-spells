import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { TypeSpell } from '../../types';
import { useSpellContext } from '../../hooks/useSpellContext';
import { useCallback, useEffect, useState } from 'react';

export const SpellCard = ({ spell }: { spell: TypeSpell }) => {
  const { addToFavSpells, favSpells, removeFromFavSpells } = useSpellContext();

  const [isFav, setIsFav] = useState(false);

  const handleFavoriteClick = useCallback(() => {
    if (isFav) {
      removeFromFavSpells(spell.index);
      setIsFav(false);
      return;
    }
    addToFavSpells(spell);
  }, [addToFavSpells, isFav]);

  useEffect(() => {
    if (favSpells.some((s) => s.index === spell.index)) {
      setIsFav(true);
    }
  }, [favSpells, spell]);

  return (
    <div
      className=" bg-blue-200 relative rounded flex flex-wrap p-2 h-20 w-full hover:bg-blue-300 transition-all items-center justify-between gap-4"
      key={spell.index}
    >
      <div>
        <Link to={`spell-details/${spell?.index}`}>
          <h2 className=" font-bold text-base uppercase line-clamp-1">
            {spell.name}
          </h2>
        </Link>
        <div>
          Level:
          <span className=" font-bold">{' ' + spell.level}</span>
        </div>
      </div>
      <button
        type="button"
        onClick={handleFavoriteClick}
        className=" absolute -right-2 -bottom-2"
      >
        {isFav ? (
          <FaHeart className="text-red-600" fontSize={'1.6rem'} />
        ) : (
          <FaRegHeart className="hover:text-red-600" fontSize={'1.6rem'} />
        )}
      </button>
    </div>
  );
};
