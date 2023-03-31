import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FormWrapper = styled.div`
  position: relative;

  height: 100%;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 425px;
  height: 80vh;
  gap: 40px;

  background-color: ${p => p.theme.colors.ternaryBackground};

  transition: background-color ${({ theme }) => theme.transitions.normal};

  @media ${p => p.theme.breakpoints.mobile.media} {
    min-width: 280px;
    padding: 10px;

    border-radius: 22px;
  }

  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    max-height: 650px;
    height: 80vh;
    padding: 60px 80px;

    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
  }

  @media ${p => p.theme.breakpoints.tablet.media} {
    width: 608px;
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    width: 618px;
    max-height: 609px;
  }
`;

const WrapperTwo = styled(Wrapper)`
  position: absolute;
  top: 50%;
  left: 50%;
  overflow-y: auto;

  transition: opacity 0.5s ease, transform 0.5s ease;

  @media ${p => p.theme.breakpoints.desktop.media} {
    padding-bottom: 16px;
  }

  z-index: ${({ state }) => (state === 'exited' ? -1 : 1)};

  opacity: ${({ state }) => {
    switch (state) {
      case 'exited':
        return 0;
      case 'exiting':
        return 0;
      default:
        return 1;
    }
  }};

  transform: translate(
    calc(
      -50% + ${({ state }) => {
          switch (state) {
            case 'exited':
              return 300;
            case 'exiting':
              return 300;
            default:
              return 0;
          }
        }}px
    ),
    -50%
  );
`;

const Title = styled.h2`
  line-height: 1.36;
  text-align: center;

  @media ${p => p.theme.breakpoints.mobile.media} {
    font-weight: ${p => p.theme.fontWeights.logo};
    font-size: ${p => p.theme.fontSizes.ml};
  }

  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    font-weight: ${p => p.theme.fontWeights.heading};
    font-size: ${p => p.theme.fontSizes.lx};
  }

  color: ${p => p.theme.colors.accentedTextDark};
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  @media ${p => p.theme.breakpoints.mobile.media} {
    gap: 24px;
  }

  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    gap: 40px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${p => p.theme.breakpoints.mobile.media} {
    gap: 12px;
  }

  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    gap: 16px;
  }
`;

const BottomText = styled.p`
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.33;
  color: ${p => p.theme.colors.accentedTextDarkOpaq};
`;

const BottomLink = styled(Link)`
  color: ${p => p.theme.colors.link};
`;

export const Button = styled.button`
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: ${p => p.theme.fontSizes.nl};
  letter-spacing: 0.04em;
  border-radius: 22px;
  padding: 10.5px;

  @media ${p => p.theme.breakpoints.desktop.media} {
    border-radius: 10.5px;
    border-radius: 24px;
  }

  background: ${p => p.theme.colors.accent};
  &:nth-child(2) {
    background: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.black};
    outline: ${p => p.theme.borders.primaryBtn}
      ${({ theme: { colors } }) => colors.accent};
    &:hover,
    :focus {
      color: ${p => p.theme.colors.white};
      background: ${p => p.theme.colors.accent};
    }
  }
  color: ${p => p.theme.colors.white};

  transition: transform 0.5s, color ${({ theme }) => theme.transitions.normal};

  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  :hover,
  :focus {
    transform: scale(1.05);

    color: ${p => p.theme.colors.darkMain};
  }
  :hover:before {
    left: 100%;
  }

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.6),
      transparent
    );
    transition: all 650ms;
  }
`;

export {
  Wrapper,
  WrapperTwo,
  FormWrapper,
  Title,
  InputWrapper,
  BottomText,
  BottomLink,
  ButtonWrapper,
};
