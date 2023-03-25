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
  REFRESH: 'auth/refresh',
};

export const BACKEND_BASE_URL = 'localhost:4000';

export { ROUTES, BACKEND_ENDPOINTS, CACHE_TAGS };
