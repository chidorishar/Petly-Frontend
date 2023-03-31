import styled from 'styled-components';

export const BurgerNavMenu = styled.div`
  position: fixed;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  overflow-y: auto;
  padding: 19px 0 0;
  background: ${p => p.theme.colors.mainBackgroundWithGradient};
`;

export const LogoMenu = styled.div`
  display: flex;
`;

export const UserAuthMenu = styled.div`
  display: flex;
  margin-top: 46px;
  margin-bottom: 60px;
  margin-left: auto;
  margin-right: auto;
`;
