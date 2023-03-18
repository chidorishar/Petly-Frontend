import axios from "axios";

// eslint-disable-next-line no-undef
const {REACT_APP_BACKEND_URL} = process.env;

console.log(REACT_APP_BACKEND_URL);

axios.defaults.baseURL = `http://${REACT_APP_BACKEND_URL}`;

const getNews = async () => {
  let response = null;
  
  try {
     response = await axios.get("/api/news");
  } catch (error) {
    console.log(error);
  }

  return response.data;
};

export default getNews;

