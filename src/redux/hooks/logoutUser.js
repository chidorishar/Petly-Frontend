import axios from 'axios';

import { BACKEND_BASE_URL } from 'utils/appKeys';

axios.defaults.baseURL = `http://${BACKEND_BASE_URL}`;

export const logoutUser = async () => {
  try {
    const response = await axios.post('/api/auth/logout');
    console.log('response: ', response);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
