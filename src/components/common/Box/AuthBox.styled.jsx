import styled from 'styled-components';

import desktop from '../../../images/auth/desktop.png';
import tablet from '../../../images/auth/tablet.png';
import mobile from '../../../images/auth/mobile.png';


export const AuthBox = styled.div`
  height: 100%;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;

  @media ${p => p.theme.breakpoints.tablet.desktop} {
    padding-top: 81px;
    padding-bottom: 134px;
    background-image: url(${desktop});
  }

  @media ${p => p.theme.breakpoints.tablet.media} and (max-width: 1279px) {
    padding-top: 204px;
    padding-bottom: 260px;
    background-image: url(${tablet});
  }

  @media (max-width: 767px) {
    padding-top: 42px;
    padding-bottom: 151px;
    background-image: url(${mobile});
  }
`;
