import axios from 'axios';
import { BACKEND_BASE_URL } from 'utils/appKeys';

axios.defaults.baseURL = `http://${BACKEND_BASE_URL}`;

const getNotices = async (category = 'sell', searchString = '') => {
  let response = null;

  try {
    response = await axios.get(
      `/api/notices/category/${category}/${searchString}`
    );
  } catch (error) {
    console.log(error);
  }
  console.log('rrrrrr', response.data);
  return response.data;
};

export default getNotices;
