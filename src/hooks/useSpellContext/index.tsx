import { useContext } from 'react';
import { SpellContext } from '../../context/SpellsContext';

export const useSpellContext = () => {
  const context = useContext(SpellContext);
  if (!context) {
    throw new Error('useSpellsContext not inside the Provider');
  }
  return context;
};
