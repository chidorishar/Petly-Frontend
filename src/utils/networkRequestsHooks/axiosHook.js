import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import { selectUserAccessToken } from 'redux/selectors';

export const useAxios = (url, method, payload = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const controllerRef = useRef(new AbortController());
  const cancel = () => {
    controllerRef.current.abort();
  };

  const userToken = useSelector(selectUserAccessToken);
  if (userToken)
    axios.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
  else axios.defaults.headers.common['Authorization'] = null;

  const startRequest = async () => {
    setLoaded(false);
    setError(null);
    setData(null);
    try {
      const response = await axios.request({
        data: payload,
        signal: controllerRef.current.signal,
        method,
        url,
      });

      // console.log(`Setting data in hook. Data:`);
      // console.log(response.data);

      setData(response.data);

      // console.log(`Data is set in hook`);
    } catch (error) {
      // console.log(error);
      // console.log(`Error in hook: ${error}`);

      const transformedError = {
        statusText: error?.response?.statusText ?? error.message,
        code: error?.response?.status ?? error.code,
      };
      setError(transformedError);
    } finally {
      // console.log(`Setting loaded in hook`);
      setLoaded(true);
      // console.log(`Loaded is set in hook`);
    }
  };

  return { cancel, startRequest, data, error, loaded };
};
