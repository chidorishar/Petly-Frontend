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

const getNotices = async (category = 'sell', searchString = '') => {
  let response = null;

  const url = `/api/notices/${noticesRoutes[category]}${
    searchString.trim() ? `?searchQuery=${searchString}` : ''
  }`;

  try {
    response = await axios.get(url);
  } catch (error) {
    console.log(error);
  }

  return response.data;
};

export default getNotices;
