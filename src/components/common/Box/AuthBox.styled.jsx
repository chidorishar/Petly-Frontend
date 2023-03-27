import styled from 'styled-components';

import {
  desktop,
  tablet,
  mobile,
  desktop2x,
  tablet2x,
  mobile2x,
  desktopWebp,
  tabletWebp,
  mobileWebp,
  desktop2xWebp,
  tablet2xWebp,
  mobile2xWebp,
} from 'images/auth';

export const AuthBox = styled.div`
  width: max-content;
  height: 100%;
  margin: 0 auto;

  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;

  @media ${p => p.theme.breakpoints.tablet.desktop} {
    padding-top: 91px;
    padding-bottom: auto;
    height: 701px;
    background-image: url(${(desktop, desktopWebp)});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${(desktop2x, desktop2xWebp)});
    }
  }

  @media ${p => p.theme.breakpoints.tablet.media} and (max-width: 1279px) {
    padding-top: 204px;
    padding-bottom: auto;
    height: 956px;
    background-image: url(${(tablet, tabletWebp)});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${(tablet2x, tablet2xWebp)});
    }
  }

  @media (max-width: 767px) {
    padding-top: 42px;
    padding-bottom: auto;
    height: 522px;
    background-image: url(${(mobile, mobileWebp)});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${(mobile2x, mobile2xWebp)});
    }
  }
`;
