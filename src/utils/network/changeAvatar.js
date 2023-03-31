import axios from 'axios';
import { BACKEND_BASE_URL } from 'utils/appKeys';

axios.defaults.baseURL = `${BACKEND_BASE_URL}`;

export const changeAvatar = async file => {
  try {
    console.log(file.get('avatarImg'));
    const response = await axios.patch('/api/users/avatar', file);
    return response;
  } catch (error) {
    return error.response;
  }
};
