import axios from 'axios';
import environments from '../environments';
import { SPELLS } from '../constants/index';

export const fetchSpellsAPI = async () => {
  const response = await axios.get(`${environments.apiBaseUrl}/${SPELLS}`);
  return response.data;
};

export const fetchSpellDetailAPI = async (spell: string) => {
  const response = await axios.get(
    `${environments.apiBaseUrl}/${SPELLS}/${spell}`
  );
  return response.data;
};
