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
  display: flex;

  width: 100vw;
  height: 91vh;
  margin: 0 auto;

  background-repeat: no-repeat;

  @media ${p => p.theme.breakpoints.desktop.media} {
    background-image: url(${(desktop, desktopWebp)});
    background-position: 50% 324px;
    background-size: 1396px auto;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${(desktop2x, desktop2xWebp)});
    }
  }

  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    height: 94vh;
  }

  @media ${p => p.theme.breakpoints.tablet.media} {
    background-image: url(${(tablet, tabletWebp)});
    background-position: 50% 569px;
    background-size: 1398px auto;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${(tablet2x, tablet2xWebp)});
    }
  }

  @media ${p => p.theme.breakpoints.mobile.media} {
    background-position: 20% 359px;
    background-size: 620px auto;
    background-image: url(${(mobile, mobileWebp)});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${(mobile2x, mobile2xWebp)});
    }
  }
`;
