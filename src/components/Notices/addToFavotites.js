import axios from 'axios';
import { BACKEND_BASE_URL } from 'utils/appKeys';

axios.defaults.baseURL = `http://${BACKEND_BASE_URL}`;

const addToFavorites = async id => {
  try {
    const response = await axios.patch(`/api/notices/favorites/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default addToFavorites;
