import styled from 'styled-components';

import { BackgroundImageStyled } from 'components/common';

export const LinkStyled = styled.a`
  position: absolute;
  right: 43%;
  bottom: 13%;
  z-index: 100;

  width: fit-content;

  transform-origin: bottom;
  transform: scale(1.2) rotate(19deg);

  animation: beat 0.8s infinite alternate;

  @media (min-width: ${p => p.theme.breakpoints.tablet.width}) {
    right: 49%;
    bottom: 17%;

    transform: scale(1.83) rotate(19deg);
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    right: 51%;
    bottom: 23%;
  }

  @keyframes beat {
    to {
      transform: scale(1.4) rotate(40deg);
    }
  }
`;

export const HeartImgStyled = styled(BackgroundImageStyled)`
  position: relative;
  width: max-content;

  filter: drop-shadow(8px 5px 5px rgba(217, 1, 0, 0.7));

  @media ${p => p.theme.breakpoints.tablet.media} {
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
  }
`;
