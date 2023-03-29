import styled from 'styled-components';
import { css } from 'styled-components';

export const activeAccentedButton = ({ theme, bgColor, hoverColor }) => css`
  border: ${theme.borders.small};

  background-color: ${bgColor ?? theme.colors.light};
  border-color: ${theme.colors.grey};

  cursor: pointer;
  transition: background-color ${theme.transitions.normal},
    color ${theme.transitions.normal};

  &:focus,
  &:hover {
    outline: none;

    background-color: ${hoverColor ?? theme.colors.accent};
    color: ${theme.colors.dark};
  }
`;

export const interactiveInput = ({ theme }) => css`
  display: block;
  border-style: solid;
  outline: none;

  transition: border-color ${theme.transitions.normal};

  &:focus,
  &:active {
    border-color: ${theme.colors.accent};
  }
`;

export const ButtonWideCommon = styled.button`
  ${activeAccentedButton};

  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights.bold};

  width: ${p => p.theme.sizes.small};
  margin: 0;
  margin-top: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.big};
`;

export const ContainerFrameCommon = styled.div`
  display: flex;

  width: fit-content;
  margin: 0 auto;
  padding: ${({ theme: { space } }) => space[3]}px
    ${({ theme: { space } }) => space[4]}px;
  border-radius: ${({ theme: { radii } }) => radii.big};

  background-color: ${({ theme: { colors } }) => colors.light};
`;

export const InsetButtonCommon = styled.button`
  ${activeAccentedButton};

  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.bold};

  min-width: ${p => p.theme.sizes.buttons.normal};
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
`;

export const InputCommon = styled.input`
  ${interactiveInput};

  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights.medium};

  width: ${p => p.theme.sizes.small};
  margin: 0 auto;
  margin-top: ${p => p.theme.space[1]}px;
  padding: ${p => p.theme.space[1]}px;
  border-radius: ${p => p.theme.radii.normal};
`;
