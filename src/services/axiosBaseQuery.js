import axios from 'axios';

export const AUTH_HEADER_NAME = 'Authorization';

export const axiosBaseQuery = (
  { baseUrl, prepareHeaders } = { baseUrl: '' }
) => {
  const headers = new Headers();

  return async ({ url = '', method, data, params }, api) => {
    prepareHeaders(headers, api);
    axios.defaults.headers.common[AUTH_HEADER_NAME] =
      headers.get(AUTH_HEADER_NAME) || '';

    try {
      const result = await axios({ url: baseUrl + url, method, data, params });

      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
};
