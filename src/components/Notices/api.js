import axios from 'axios';
import { BACKEND_BASE_URL } from 'utils/appKeys';

// import { toast } from 'react-toastify';

axios.defaults.baseURL = `${BACKEND_BASE_URL}`;

export const addToFavorites = async id => {
  try {
    const response = await axios.patch(`/api/notices/favorites/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteFromFavorites = async id => {
  try {
    const response = await axios.delete(`/api/notices/favorites/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteNotice = async id => {
  try {
    const response = await axios.delete(`/api/notices/own/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getNoticeDetailedInfo = async id => {
  try {
    const response = await axios.get(`/api/notices/notice/${id}`);
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};

export const postNotice = async values => {
  try {
    const response = await axios.post(`/api/notices/new/`, values);
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
