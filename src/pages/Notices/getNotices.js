import axios from 'axios';
import { BACKEND_BASE_URL } from 'utils/appKeys';

axios.defaults.baseURL = `http://${BACKEND_BASE_URL}`;

const noticesRoutes = {
  sell: 'category/sell',
  forFree: 'category/for-free',
  lostFound: 'category/lost-found',
  own: 'own',
  favorites: 'favorites',
};
//6420859c98afbb5b70f7bd4e
const getNotices = async (category = 'sell', searchString = '') => {
  console.log('in getNotices');
  let response = null;
  const url = `/api/notices/${noticesRoutes[category]}${
    searchString.trim() ? `?searchQuery=${searchString}` : ''
  }`;

  try {
    response = await axios.get(url);
  } catch (error) {
    console.log(error);
  }
  // console.log('rrrrrr', response.data);
  return response.data;
};

export default getNotices;
