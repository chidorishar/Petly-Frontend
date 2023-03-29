// import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { NETWORK_ACTIONS } from 'utils/appKeys';
import { useAxios } from './axiosHook';

const { GET_ALL_NEWS, GET_NEWS_BY_QUERY } = NETWORK_ACTIONS;

export const useGetAllNews = setNews => {
  const { startRequest, data, error, loaded } = useAxios(
    GET_ALL_NEWS.url,
    GET_ALL_NEWS.method
  );

  // get all news on first render
  useEffect(() => {
    (async () => {
      startRequest();
    })();
  }, []);

  // handle successful data load
  useEffect(() => {
    if (!loaded) return;

    toast.success('News loaded successfully!', {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    setNews(data.result);
  }, [data]);

  // handle error
  useEffect(() => {
    if (error) {
      toast.error(`Error loading news! Network error: ${error.statusText}`, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }, [error]);

  return {
    [`${GET_ALL_NEWS.prefix}_Resp`]: data,
    [`${GET_ALL_NEWS.prefix}_Error`]: error,
    [`${GET_ALL_NEWS.prefix}_StartRequest`]: startRequest,
    [`${GET_ALL_NEWS.prefix}_IsLoaded`]: loaded,
  };
};

export const useGetNewsByQuery = () => {
  const { startRequest, data, error, loaded } = useAxios(
    GET_NEWS_BY_QUERY.url,
    GET_NEWS_BY_QUERY.method
  );

  // toast.success('News loaded successfully!');

  return {
    [`${GET_NEWS_BY_QUERY.prefix}_Resp`]: data,
    [`${GET_NEWS_BY_QUERY.prefix}_Error`]: error,
    [`${GET_NEWS_BY_QUERY.prefix}_StartRequest`]: startRequest,
    [`${GET_NEWS_BY_QUERY.prefix}_IsLoaded`]: loaded,
  };
};
