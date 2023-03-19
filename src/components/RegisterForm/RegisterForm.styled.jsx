import { Link } from 'react-router-dom';
import styled from 'styled-components';

// TODO: Change all media into variables.
const FormWrapper = styled.div`
  position: relative;
  width: 100%;

  @media (max-width: 767px) {
    margin-top: 42px;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    margin-top: 80px;
  }

  @media (min-width: 1280px) {
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

  background: ${p => p.theme.colors.white};

  @media (max-width: 767px) {
    min-width: 280px;
  }

  @media (min-width: 768px) {
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;

    padding: 60px 80px;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    width: 608px;
  }

  @media (min-width: 1280px) {
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
  font-family: ${p => p.theme.fontFamilies.Manrope};
  line-height: 1.36;
  text-align: center;

  // TODO: Extract font sizes pixels into vars.
  @media (max-width: 767px) {
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: 24px;
  }

  @media (min-width: 768px) {
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: 36px;
  }

  color: ${p => p.theme.colors.darkMain};
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    gap: 24px;
  }

  @media (min-width: 768px) {
    gap: 40px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    gap: 12px;
  }

  @media (min-width: 768px) {
    gap: 16px;
  }
`;

const BottomText = styled.p`
  font-family: ${p => p.theme.fontFamilies.Manrope};
  font-size: 12px;
  line-height: 1.33;
  color: ${p => p.theme.colors.gray};
`;

const BottomLink = styled(Link)`
  color: ${p => p.theme.colors.lightBlue};
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
