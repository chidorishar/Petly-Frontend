export const selectFilter = state => state.filter;

export const selectIsUserAuthorized = state => state.auth.isUserAuthorized;
export const selectUserData = state => state.auth.user;

export const selectFriends = state => state.friends.items;
export const selectIsLoading = state => state.friends.isLoading;
export const selectError = state => state.friends.error;
