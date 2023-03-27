import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FormWrapper = styled.div`
  position: relative;
  width: 100%;

  @media ${p => p.theme.breakpoints.mobile.media} {
    margin-top: 42px;
  }

  @media ${p => p.theme.breakpoints.tablet.media} {
    margin-top: 150px;
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    margin-top: 44px;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media ${p => p.theme.breakpoints.mobile.media} {
    background-color: ${p => p.theme.colors.mainBackground};
    min-width: 280px;
  }

  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    background-color: ${p => p.theme.colors.secondaryBackground};
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;

    padding: 60px 80px;
  }

  @media ${p => p.theme.breakpoints.tablet.media} {
    width: 608px;
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    width: 618px;
  }
`;

const WrapperTwo = styled(Wrapper)`
  transition: opacity 0.5s ease, transform 0.5s ease;

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

  transform: translateX(
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
    )
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

  color: ${p => p.theme.colors.heading};
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
  color: ${p => p.theme.colors.inputText};
`;

const BottomLink = styled(Link)`
  color: ${p => p.theme.colors.link};
`;

export const Button = styled.button`
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;

  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: ${p => p.theme.fontSizes.nl};
  letter-spacing: 0.04em;

  padding: 10.5px;

  border-radius: 24px;
  border: ${p => p.isLight && `2px solid ${p.theme.colors.accent}`};

  background: ${p => (p.isLight ? 'transparent' : p.theme.colors.accent)};
  color: ${p =>
    p.isLight ? p.theme.colors.darkMain : p.theme.colors.secondaryBackground};

  :hover,
  :focus {
    transition: transform 0.5s;
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
      /* rgba(255, 255, 255, 0.6), */ transparent
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
