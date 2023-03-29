import styled from 'styled-components';

import { BackgroundImageStyled } from 'components/common';

export const Heading = styled.h1`
  font-weight: 500;
  width: 280px;
  font-size: 32px;
  line-height: calc(44 / 32);

  @media (min-width: ${p => p.theme.breakpoints.tablet.width}) {
    font-size: 68px;
    line-height: calc(100 / 68);

    width: 588px;
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    padding-top: 33px;
  }
`;

export const Section = styled.section`
  position: relative;

  padding-top: 60px;

  @media ${p => p.theme.breakpoints.tablet.media} {
    padding-top: 88px;
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    padding-top: 59px;
    padding-bottom: 408px;
  }
`;

export const DogBackground = styled(BackgroundImageStyled)`
  right: 0;
  bottom: 0;
  transform-origin: bottom;

  width: fit-content;
  height: 63vh;

  @media ${p => p.theme.breakpoints.tablet.media} {
    transform: scale(1.01);
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    transform: scale(0.94);
    height: fit-content;
  }
`;

export const WavesBackground = styled(BackgroundImageStyled)`
  left: 0;
  right: 0;

  height: calc(100vh - 125px);
  width: 100%;
  margin: 0 auto;

  @media ${p => p.theme.breakpoints.tablet.media} {
    transform: translateY(-43px);
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    width: auto;
  }

  & img {
    width: 100%;
    height: 100%;

    @media ${p => p.theme.breakpoints.desktop.media} {
      width: auto;
      max-width: none;
    }
  }
`;
