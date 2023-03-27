import styled from 'styled-components';

import { BackgroundImageStyled } from 'components/common';

export const Heading = styled.h1`
  width: 280px;
  font-weight: 500;
  font-size: 32px;
  line-height: calc(44 / 32);

  @media (min-width: ${p => p.theme.breakpoints.tablet.width}) {
    width: 588px;
    font-size: 68px;
    line-height: calc(100 / 68);
  }
`;

export const Section = styled.section`
  position: relative;

  padding-top: 60px;

  @media ${p => p.theme.breakpoints.tablet.media} {
    padding-top: 88px;
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    padding-top: 92px;
    padding-bottom: 408px;
  }
`;

export const DogBackground = styled(BackgroundImageStyled)`
  right: 0;
  bottom: 0;
  transform-origin: bottom;
  transform: scale(0.83);

  width: fit-content;
  height: fit-content;

  @media ${p => p.theme.breakpoints.tablet.media} {
    transform: scale(0.94);
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    transform: scale(0.94);
  }
`;
