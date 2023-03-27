import axios from 'axios';
import { BACKEND_BASE_URL } from 'utils/appKeys';

// import { toast } from 'react-toastify';

axios.defaults.baseURL = `http://${BACKEND_BASE_URL}`;

const addToFavorites = async id => {
  try {
    const response = await axios.patch(`/api/notices/favorites/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteNotice = async id => {
  try {
    const response = await axios.delete(`/api/notices/own/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { addToFavorites, deleteNotice };
