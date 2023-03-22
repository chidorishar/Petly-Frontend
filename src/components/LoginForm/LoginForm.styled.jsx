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
  border: ${p => p.theme.borders.inputModal}
    ${({ theme: { colors } }) => colors.inputModal};

  background-color: ${({ theme: { colors } }) => colors.mainBackground};

  transition: border ${({ theme: { transitions } }) => transitions.normal};

  &:focus,
  &:hover {
    outline: none;
    border: ${p => p.theme.borders.inputModal}
      ${({ theme: { colors } }) => colors.accent};
  }
`;

export const TextMessage = styled.p`
  font-weight: ${p => p.theme.fontWeights.text};
  font-size: ${p => p.theme.fontSizes.s};
  letter-spacing: 0.04em;

  margin: 0 auto 0 32px;
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

  color: ${({ theme: { colors } }) => colors.secondaryBackground};

  background-color: ${({ theme: { colors } }) => colors.accent};
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
`;