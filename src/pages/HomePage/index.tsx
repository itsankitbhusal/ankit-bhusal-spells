import { toast } from 'react-toastify';
import SpellList from '../../components/SpellList';

export default function HomePage() {
  const handleClick = () => {
    toast.success('Toast is working', {
      position: 'top-center',
    });
  };
  return (
    <div className=' w-10/12 max-w-[1200px]'>
      {/* <button className=" px-4 py-2 bg-blue-400 rounded" onClick={handleClick}>
        Click me
      </button> */}

      <SpellList />
    </div>
  );
}
