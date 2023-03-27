import styled from 'styled-components';
// import { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  width: 100%;

  background: ${p => p.theme.colors.input};
  border: 1px solid
    ${p => (p.isError ? p.theme.colors.warning : p.theme.colors.inputModal)};
  border-radius: 40px;

  transition: border 0.2s ease;

  @media (max-width: 767.9px) {
    padding: 12px 14px;
  }

  @media (${p => p.theme.breakpoints.tablet.media}) {
    padding: 14px 18px 14px 32px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 0;

  border: 0;
  outline: none;
  background: ${p => p.theme.colors.mainBackground};

  font-weight: ${p => p.theme.fontWeights.text};
  color: ${({ theme: { colors } }) => colors.inputText};

  @media (max-width: 767.9px) {
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media (${p => p.theme.breakpoints.tablet.media}) {
    font-size: ${p => p.theme.fontSizes.n};
  }
`;

export const IconInput = styled.div`
  line-height: 0;

  @media (max-width: 767.9px) {
    margin-top: -3px;
    max-height: 16px;
  }

  transition: opacity 0.2s ease;
  opacity: ${p => (p.state === 'entered' ? '1' : '0')};
`;

export const ErrorText = styled.p`
  position: absolute;
  z-index: -1;

  font-weight: ${p => p.theme.fontWeights.text};
  line-height: 1.35;

  transition: transform 0.2s ease, opacity 0.2s ease;

  @media (max-width: 767.9px) {
    font-size: ${p => p.theme.fontSizes.xs};

    transform: translateY(
      ${p => {
        switch (p.state) {
          case 'entered':
            return '16px';
          case 'entering':
            return '16px';
          default:
            return '0';
        }
      }}
    );
  }

  @media (${p => p.theme.breakpoints.tablet.media}) {
    font-size: ${p => p.theme.fontSizes.s};

    transform: translateY(
      ${p => {
        switch (p.state) {
          case 'entered':
            return '18px';
          case 'entering':
            return '18px';
          default:
            return '0';
        }
      }}
    );
  }

  color: ${p => p.theme.colors.warning};

  opacity: ${p => (p.state === 'entered' ? '1' : '0')};
`;
