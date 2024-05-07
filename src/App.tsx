import { Outlet } from 'react-router-dom';
import SpellsContextProvider from './context/SpellsContext';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className=" grid place-items-center">
      <SpellsContextProvider>
        <Navbar />
        <Outlet />
      </SpellsContextProvider>
    </div>
  );
}
