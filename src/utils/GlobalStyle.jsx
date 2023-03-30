import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html {
  height: 100%;
}
 
body {
  margin: 0;
  font-family: 'Manrope', 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
    
  background-image:  ${p => p.theme.colors.body};

  &:after{
    content: '';

    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;

    width: 100vw;
    height: 100vh;

    pointer-events: none;
    transition: background-color ${p => p.theme.transitions.normal};

    background-color:  ${p => p.theme.colors.mainBackgroundWithTransp};
  }

  &::-webkit-scrollbar {
    width: 0px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 1px;
    background-color: ${p => p.theme.colors.mainBackground};
  }

  &::-webkit-scrollbar-thumb {
    /* background-color: ${p => p.theme.colors.accent}; */
    border-radius: 1px;
  }
}

.Toastify__toast-theme--light.Toastify__toast--info {
  color: ${p => p.theme.colors.accent};
  svg{
    fill: currentColor;
  }
}
.Toastify__progress-bar-theme--light.Toastify__progress-bar--info{
  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.accent};
}
table {
  text-indent: 0;
  border-color: inherit;
}
`;
