const baseColors = {
  accent: '#F59256',
  accentSecondary: '#3091EB',

  accentSuccess: '#3cbc81',
  accentError: '#e2001a',

  septenary: '#181C27',
  octonary: '#535353',
  nonary: '#b33232',
  denary: '#383a4d',
  undenary: '#300303',

  black: '#000',
  darkMain: '#111111',
  darkSecondary: '#111321',

  white: '#fff',
  whiteSecondary: '#FDF7F2',

  darkGradient:
    'linear-gradient(332deg, hsl(232deg 48% 20%) 0%, hsl(201deg 66% 16%) 57%, hsl(271deg 52% 36%) 100%)',
};

export const theme = {
  borders: {
    primaryBtn: '2px solid',
    inputModal: '1px solid',
  },
  colors: {
    body: baseColors.darkGradient, //'#383a4d',
    accent: baseColors.accent,

    accentedTextDark: baseColors.darkSecondary,
    accentedTextDarkOpaq: baseColors.darkSecondary + '99',
    accentedTextLight: baseColors.accent,
    heading: baseColors.darkMain,
    inputText: 'rgba(17, 17, 17, 0.6)',
    navText: '#181C27',
    newsText: '#111321',
    searchText: '#535353',
    textLight: baseColors.white,

    accentedBackgroundLight: baseColors.whiteSecondary,
    mainBackground: baseColors.whiteSecondary,
    mainBackgroundWithGradient: baseColors.whiteSecondary,
    mainBackgroundWithTransp: baseColors.whiteSecondary,
    mainBackgroundDark: '#300303',
    secondaryBackground: baseColors.white,

    black: baseColors.black,
    darkMain: baseColors.darkMain,
    darkLight: baseColors.white,
    white: baseColors.white,
    whiteSecondary: baseColors.whiteSecondary,
    link: baseColors.accentSecondary,

    backdrop: ' #11111199',
    placeholder: '#b3323299',
    hoverBtn: '#FF6101',
    input: baseColors.whiteSecondary,
    shadowCard: 'rgba(49, 21, 4, 0.07)',
    inputModal: 'rgba(245, 146, 86, 0.5)',
    success: baseColors.accentSuccess,
    warning: baseColors.accentError,
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

export const darkTheme = {
  ...theme,

  colors: {
    ...theme.colors,

    accentedTextDark: baseColors.accent,
    accentedTextDarkOpaq: baseColors.accent + '99',
    accentedTextLight: baseColors.white,
    darkLight: baseColors.darkMain,
    heading: baseColors.white,
    navText: baseColors.whiteSecondary,
    newsText: baseColors.whiteSecondary,

    accentedBackgroundLight: baseColors.accent,
    mainBackgroundWithGradient: baseColors.darkGradient,
    mainBackgroundWithTransp: 'transparent',
    secondaryBackground: baseColors.septenary,
  },
};
