import axios from 'axios';
import { BACKEND_BASE_URL } from 'utils/appKeys';

// import { toast } from 'react-toastify';

axios.defaults.baseURL = `${BACKEND_BASE_URL}`;

export const addNewPet = async data => {
  try {
    const response = await axios.post(`/api/users/pets/`, data);
    return response;
  } catch (error) {
    return error.response;
  }
};
