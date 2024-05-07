import { FaReact } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className=" sticky top-0 z-10 text-center drop-shadow-xl grid place-items-center h-16 text-xl w-full bg-blue-400">
      <div className=" text-white hover:text-gray-700 transition-all">
        <Link to="/">
          <div className=' flex gap-2'>
            <h1 className=" font-bold flex items-center gap-4">
              <FaReact className=' text-3xl animate-spin' />
              Ankit Bhusal
            </h1>
            -
            <span className=" font-normal">React Assignment</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
