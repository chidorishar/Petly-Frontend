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

const CACHE_TAGS = {
  AUTH_LOGIN: 'AuthLogin',
};

/**
 * Application backend endpoints.
 */
const BACKEND_ENDPOINTS = {
  REGISTER: 'auth/register',
  LOGIN: 'auth/login',
  LOGOUT: 'auth/logout',
  CURRENT: 'auth/current',
  REFRESH: 'auth/refresh',
  UPDATE_USER_INFO: 'users',
};

export const BACKEND_BASE_URL = 'localhost:4000';

export { ROUTES, BACKEND_ENDPOINTS, CACHE_TAGS };
