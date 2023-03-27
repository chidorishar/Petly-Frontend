import styled from 'styled-components';

import desktop from '../../../images/auth/desktop.png';
import tablet from '../../../images/auth/tablet.png';
import mobile from '../../../images/auth/mobile.png';
import desktop2x from '../../../images/auth/desktop@2x.png';
import tablet2x from '../../../images/auth/tablet@2x.png';
import mobile2x from '../../../images/auth/mobile@2x.png';

import desktopWebp from '../../../images/auth/desktop.webp';
import tabletWebp from '../../../images/auth/tablet.webp';
import mobileWebp from '../../../images/auth/mobile.webp';
import desktop2xWebp from '../../../images/auth/desktop@2x.webp';
import tablet2xWebp from '../../../images/auth/tablet@2x.webp';
import mobile2xWebp from '../../../images/auth/mobile@2x.webp';



export const AuthBox = styled.div`
  height: 100%;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;

  
  @media ${p => p.theme.breakpoints.tablet.desktop} {
    padding-top: 91px;
    padding-bottom: auto;
    height: 701px;
    background-image: url(${desktop, desktopWebp});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${desktop2x, desktop2xWebp});
    }
  }

  @media ${p => p.theme.breakpoints.tablet.media} and (max-width: 1279px) {
    padding-top: 204px;
    padding-bottom: auto;
    height: 956px;
    background-image: url(${tablet, tabletWebp});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${tablet2x, tablet2xWebp});
    }
  }

  @media (max-width: 767px) {
    padding-top: 42px;
    padding-bottom: auto;
    height: 522px;
    background-image: url(${mobile, mobileWebp});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${mobile2x, mobile2xWebp});
    }
  }
`;
