export const themeSelectors = {
  selectTheme: state => state.theme.currentTheme,
  selectThemeMode: state => state.theme.themeMode,
};

export const selectIsUserAuthorized = state => state.auth.isUserAuthorized;
export const selectUserData = state => state.auth.user;
export const selectUserAccessToken = state => state.auth.accessToken;
