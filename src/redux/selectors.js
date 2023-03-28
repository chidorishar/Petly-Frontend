export const selectFilter = state => state.filter;

export const selectIsUserAuthorized = state => state.auth.isUserAuthorized;
export const selectUserData = state => state.auth.user;
export const selectUserAccessToken = state => state.auth.accessToken;
