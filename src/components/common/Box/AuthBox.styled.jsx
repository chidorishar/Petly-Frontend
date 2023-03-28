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
  /* width: max-content; */
  height: 100%;
  margin: 0 auto;
  display: flex;

  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;

  @media ${p => p.theme.breakpoints.desktop.media} {
    
    
    
    background-image: url(${(desktop, desktopWebp)});
    background-size: 1280px auto;
    height: 701px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${(desktop2x, desktop2xWebp)});
    }
  }

  @media ${p => p.theme.breakpoints.tablet.media} {
    
    padding-bottom: auto;
    height: 956px;
    background-image: url(${(tablet, tabletWebp)});
    background-size: 768px auto;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${(tablet2x, tablet2xWebp)});
    }
  }

  @media ${p => p.theme.breakpoints.mobile.media} {
    
    padding-bottom: auto;
    height: 590px;
    background-image: url(${(mobile, mobileWebp)});
    background-size: 320px auto;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${(mobile2x, mobile2xWebp)});
    }
  }
`;
