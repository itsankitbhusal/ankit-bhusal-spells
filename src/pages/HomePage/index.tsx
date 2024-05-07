import SpellList from '../../components/SpellList';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ToggleView from '../../components/ToggleView';
import { ALL, FAV } from '../../constants';
export default function HomePage() {
  const [searchParam] = useSearchParams();
  const navigate = useNavigate();

  const fav = searchParam.get('fav');

  const handleLinkClick = () => {
    if (fav) {
      navigate('/');
    } else {
      navigate('?fav=true');
    }
  };
  return (
    <div className=" mx-2 sm:mx-0 sm:w-10/12 max-w-[1200px]">
      <div>
        <div className="my-16">
          <h1 className="font-bold text-3xl text-center">
            List of all available {fav ? 'Favorite ' : ''}Spells
          </h1>
        </div>
        <div className="w-full text-end mb-2">
          <ToggleView
            label={fav ? 'View all spells list' : 'View list of favorite'}
            onClick={handleLinkClick}
          />
        </div>
        <div className="grid place-items-center">
          <SpellList render={fav ? FAV : ALL} />
        </div>
      </div>
    </div>
  );
}
