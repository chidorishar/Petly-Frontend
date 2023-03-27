import styled from 'styled-components';
import BackgroundImage from './BackgroundImage';

export const BackgroundImageStyled = styled(BackgroundImage)`
  position: absolute;
  z-index: ${p => p.zIndex};

  width: 100%;
  height: 100%;
`;
