import styled from 'styled-components';

export const ContainerCardCommon = styled.div`
  max-width: 618px;
  max-height: 496px;
  margin: 0 auto;
  padding: 60px 40px;
  text-align: center;
  border-radius: ${p => p.theme.radii.mainBorderRadius};
  background-color: ${({ theme: { colors } }) => colors.secondaryBackground};
  box-shadow: 7px 4px 14px 0px #0000001c;
`;

export const Title = styled.h2`
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: ${p => p.theme.fontSizes.lx};
  color: ${({ theme: { colors } }) => colors.heading};
`;

export const FormCommon = styled.form`
  padding: 40px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  letter-spacing: 0.04em;
`;

export const InputCommon = styled.input`
  font-size: ${p => p.theme.fontSizes.n};
  font-weight: ${p => p.theme.fontWeights.text};
  color: ${({ theme: { colors } }) => colors.inputText};

  width: 100%;
  margin: 0 auto;
  padding: 14px 32px;

  border-radius: 26px;
  border: none;
  outline: ${p => p.theme.borders.inputModal} ${({ theme: { colors } }) => colors.inputModal};

  background-color: ${({ theme: { colors } }) => colors.mainBackground};

  transition: border ${({ theme: { transitions } }) => transitions.normal};

  &:nth-child(2) {
    margin-top: 40px;
  }

  &:nth-last-child(3) {
    margin-top: 20px;
  }

  &:nth-child(3) {
    margin-top: 0;
  }

  &:nth-child(1) {
    margin-top: 0;
  }

  &:hover, &:focus {
    outline-width: 2px;
  };

`;



export const TextMessage = styled.p`
  font-weight: ${p => p.theme.fontWeights.text};
  font-size: ${p => p.theme.fontSizes.s};
  letter-spacing: 0.04em;

  margin: 0 auto 0 32px;

  &:nth-child(2) {
    margin-bottom: 20px;
  }
  padding: 0;

  color: ${({ theme: { colors } }) => colors.warningText};
`;

export const Button = styled.button`
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: ${p => p.theme.fontSizes.nl};
  letter-spacing: 0.04em;

  margin-top: 40px;

  padding: 10.5px;

  border-radius: 24px;

  background: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.secondaryBackground};

  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  :hover,
  :focus {
    transform: scale(1.05);
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
        rgba(255, 255, 255, 0.6),
        transparent
      );
      transition: all 650ms;
    }
`;

export const Text = styled.p`
  font-weight: ${p => p.theme.fontWeights.text};
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: 0.04em;

  margin: 0 auto;
  padding: 0;

  color: ${({ theme: { colors } }) => colors.inputText};
`;

export const Link = styled.a`
  color: ${({ theme: { colors } }) => colors.link};
  cursor: pointer;
`;
