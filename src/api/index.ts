import axios from 'axios';
import environments from '../environments';
import apiRoutes from '../constants/index';

export const fetchSpellsAPI = async () => {
  const response = await axios.get(
    `${environments.apiBaseUrl}/${apiRoutes.spells}`
  );

  return response.data;
};
