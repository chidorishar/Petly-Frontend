/**
 * File contains global application reusable keys.
 */

/**
 * Application main navigation routes.
 */
const ROUTES = {
  REGISTER: '/register',
  LOGIN: '/login',
  NEWS: '/news',
  NOTICES: '/notices',
  FRIENDS: '/friends',
  USERPAGE: '/user',
  PROFILE: '/profile',
};

/**
 * Application local storage keys.
 */
const LOCAL_STORAGE_KEYS = {
  ACCESS_TOKEN: 'accessToken',
};

/**
 * Application backend endpoints.
 */
const BACKEND_ENDPOINTS = {
  REGISTER: 'auth/register',
  LOGIN: 'auth/login',
  LOGOUT: 'auth/logout',
  REFRESH: 'auth/refresh',
  UPDATE_USER_INFO: 'users',
};

const CACHE_TAGS = {
  AUTH_LOGIN: 'AuthLogin',
};

export const BACKEND_BASE_URL = 'localhost:4000';

export { ROUTES, LOCAL_STORAGE_KEYS, BACKEND_ENDPOINTS, CACHE_TAGS };
