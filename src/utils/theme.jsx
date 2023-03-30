export const theme = {
  borders: {
    primaryBtn: '2px solid',
    inputModal: '1px solid',
  },
  colors: {
    accent: '#F59256',
    mainBackground: '#FDF7F2',
    mainBackgroundDark: '#300303',
    secondaryBackground: '#FFFFFF',
    heading: '#111111',
    searchText: '#535353',
    navText: '#181C27',
    newsText: '#111321',
    inputText: 'rgba(17, 17, 17, 0.6)',
    black: '#000000',
    link: '#3091EB',
    backdrop: ' #11111199',
    placeholder: '#1b1b1b99',
    hoverBtn: '#FF6101',
    input: '#FDF7F2',
    shadowCard: 'rgba(49, 21, 4, 0.07)',
    inputModal: 'rgba(245, 146, 86, 0.5)',
    success: '#3cbc81',
    warning: '#e2001a',
    darkMain: '#000',
  },
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    ml: '24px',
    mll: '28px',
    n: '18px',
    nl: '20px',
    l: '32px',
    lx: '36px',
    xl: '64px',
  },
  fontWeights: {
    text: 400,
    heading: 500,
    semiBold: 600,
    logo: 700,
  },
  radii: {
    mainBorderRadius: '40px',
    secondaryBorderRadius: '20px',
    none: '0',
    round: '50%',
  },
  lineHeights: {
    body: 1.4,
    heading: 1.4,
  },
  sizes: {
    buttons: {
      normal: '100px',
    },
    small: '200px',
    normal: '300px',
    wide: '500px',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    mainFamily: 'Manrope',
    secondaryFamily: 'Inter',
    logoFamily: 'Poppins',
  },
  transitions: {
    normal: '250ms ease-in-out',
  },
  breakpoints: {
    mobile: {
      media: '(max-width: 767px)',
      width: '320px',
    },
    mobileOnly: {
      media: '(max-width: 767.9px)',
      width: '767.9px',
    },
    tablet: {
      media: '(min-width: 768px) and (max-width: 1279px)',
      mediaFrom: '(min-width: 768px)',
      width: '768px',
    },
    desktop: {
      media: '(min-width: 1280px)',
      width: '1280px',
    },
  },
};

export const lightTheme = {
  body: '#fff',
};

export const darkTheme = {
  ...theme,
  body: 'linear-gradient(332deg, hsl(232deg 48% 20%) 0%, hsl(201deg 66% 16%) 57%, hsl(271deg 52% 36%) 100%)', //'#383a4d',
  colors: {
    ...theme.colors,
    secondaryBackground: theme.colors.searchText,
    heading: theme.colors.secondaryBackground,
    navText: theme.colors.mainBackground,
  },
};
