import styled from 'styled-components';

export const LanguageSwitchEl = styled.div`
  margin-left: 40px;
  background: transparent;
  padding: 4px;
  border-radius: 3px;
  width: fit-content;

  @media ${p => p.theme.breakpoints.desktop.media} {
    margin-right: 40px;
  }
`;

export const LanguageOption = styled.input`
  position: relative;
  appearance: none;
  cursor: pointer;
  border-radius: 50%;
  border: solid 1px #f59256;
  padding: 15px 15px;
  background-color: ${p => p.theme.colors.secondaryBackground};
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes.xs};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms;

  :first-child {
    margin-right: 10px;
  }
  &:hover {
    font-weight: ${p => p.theme.fontWeights.logo};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
  }
  &:not(:checked) {
    color: ${p => p.theme.colors.heading};
  }

  &:checked {
    background-color: ${p => p.theme.colors.accent};
    font-weight: ${p => p.theme.fontWeights.logo};
  }
  &::before {
    content: attr(label);
    text-align: center;
    position: absolute;
    transform: translate(-50%, -50%);
  }
`;
