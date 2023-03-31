import axios from 'axios';
import { BACKEND_BASE_URL } from 'utils/appKeys';

axios.defaults.baseURL = `${BACKEND_BASE_URL}`;

export const getUser = async () => {
  try {
    const response = await axios.get('/api/users');
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
