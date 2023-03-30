import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 
body {
    margin: 0;
  font-family: 'Manrope', 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
    
    background:  ${p => p.theme.body};
    color: ${p => p.theme.textColor};

    &::-webkit-scrollbar {
    width: 0px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 1px;
    background-color: ${p => p.theme.colors.mainBackground};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.colors.accent};
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

button {
    color: ${p => p.theme.button.text};
    border-color: ${p => p.theme.button.border};
    background-color: ${p => p.theme.button.background};
    
   
  :hover,
  :focus {
    color: ${p => p.theme.button.text};
    border-color: ${p => p.theme.button.border};
    background-color: ${p => p.theme.button.hoverBackground};
    
  }
  }









`;
