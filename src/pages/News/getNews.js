import axios from "axios";

// eslint-disable-next-line no-undef
const {DB_HOST} = process.env;


axios.defaults.baseURL = DB_HOST;

const getNews = async () => {
  try {
    const response = await axios.get("/news");
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export default getNews;