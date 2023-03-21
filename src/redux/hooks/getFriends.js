import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// const { REACT_APP_BACKEND_URL } = process.env;
// const instance = axios.create({
//   baseURL: REACT_APP_BACKEND_URL,
// });

// export const getFriends = createAsyncThunk(
//   'services/getServices',
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await instance.get('/api/services');
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

const { REACT_APP_BACKEND_URL } = process.env;
axios.defaults.baseURL = `http://${REACT_APP_BACKEND_URL}`;

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
