import styled from 'styled-components';
import { InputCommon } from 'components/common/shared.styled';

export const Form = styled.form`
  margin-bottom: 42px;

  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    margin-bottom: 33px;
    padding-top: 16px;
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    margin-bottom: 24px;
    padding-top: 0;
  }
`;

export const UserLabel = styled.label`
  display: flex;
  align-items: center;

  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.text};
  line-height: 1.33;
  letter-spacing: 0.04em;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
  span {
    font-weight: ${p => p.theme.fontWeights.heading};
  }
  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    font-size: ${p => p.theme.fontSizes.n};
    line-height: 1.38;
  }
`;

export const UserInput = styled(InputCommon)`
  width: 159px;
  margin: 0;
  margin-right: 9px;
  padding: 3px 18px;
  border: 1px solid transparent;
  border-radius: ${p => p.theme.radii.mainBorderRadius};

  color: inherit;
  background-color: transparent;

  line-height: 1.33;

  transition: background-color ${p => p.theme.transitions.normal};

  &.enabled {
    border: 1px solid ${p => p.theme.colors.inputModal};
    background-color: ${p => p.theme.colors.success}5e;
  }
  &.error {
    background-color: ${p => p.theme.colors.warning}38;
    border-color: red;
  }
  &:disabled {
    border: none;
    border-color: transparent;
  }
  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    width: 216px;
    padding: 3px 12px;
    margin-right: 24px;
  }
`;

export const UserSpan = styled.span`
  width: 60px;

  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    width: 107px;
  }
`;
export const EditBtn = styled.button`
  display: flex;
  width: 20px;
  height: 20px;
  padding: 0;
  justify-content: center;
  align-items: center;
  border-radius: ${p => p.theme.radii.round};

  background-color: ${p => p.theme.colors.mainBackground};
  color: ${p => p.theme.colors.accent};

  transition: background-color ${p => p.theme.transitions.normal},
    color ${p => p.theme.transitions.normal};

  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    width: 32px;
    height: 32px;

    font-size: ${p => p.theme.fontSizes.nl};
  }

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    color: ${p => p.theme.colors.mainBackground};
    background-color: ${p => p.theme.colors.hoverBtn};
  }

  &.disabled {
    color: ${p => p.theme.colors.heading};
  }
`;
