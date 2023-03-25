import styled from 'styled-components';

import desktop from '../../../images/auth/desktop.png';
import tablet from '../../../images/auth/tablet.png';
import mobile from '../../../images/auth/mobile.png';
import desktop2x from '../../../images/auth/desktop@2x.png';
import tablet2x from '../../../images/auth/tablet@2x.png';
import mobile2x from '../../../images/auth/mobile@2x.png';

export const AuthBox = styled.div`
  height: 100%;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;

  @media ${p => p.theme.breakpoints.tablet.desktop} {
    padding-top: 91px;
    padding-bottom: 124px;
    background-image: url(${desktop});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${desktop2x});
    }
  }

  @media ${p => p.theme.breakpoints.tablet.media} and (max-width: 1279px) {
    padding-top: 204px;
    padding-bottom: 260px;
    background-image: url(${tablet});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${tablet2x});
    }
  }

  @media (max-width: 767px) {
    padding-top: 42px;
    padding-bottom: 151px;
    background-image: url(${mobile});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${mobile2x});
    }
  }
`;
