import axios from 'axios';

import { BACKEND_BASE_URL } from 'utils/appKeys';

axios.defaults.baseURL = `${BACKEND_BASE_URL}`;

const getFriends = async () => {
  let response = null;

  try {
    response = await axios.get('/api/services');
  } catch (error) {
    console.log(error);
  }
  return response.data;
};

export default getFriends;
