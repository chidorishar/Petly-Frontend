import styled from 'styled-components';
import { InputCommon } from 'components/common/shared.styled';
import { Box } from 'components/common';

export const UserInput = styled(InputCommon)`
  background-color: transparent;
  margin: 0;
  width: 159px;
  margin-right: 9px;
  border: 1px solid transparent;
  border-radius: ${p => p.theme.radii.mainBorderRadius};
  padding: 4px 18px;
  line-height: ${p => p.theme.lineHeights.body};

  &.enabled {
    background: #fdf7f2;
    border: 1px solid ${p => p.theme.colors.inputModal};
  }
  &.error {
    border-color: red;
  }
  @media ${p => p.theme.breakpoints.tablet.media} {
    width: 216px;
    padding-left: 12px;
  }
`;

export const UserLabel = styled.label`
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.text};
  line-height: ${p => p.theme.lineHeights.body};
  letter-spacing: 0.04em;
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  span {
    font-weight: ${p => p.theme.fontWeights.heading};
  }
  @media ${p => p.theme.breakpoints.tablet.media} {
    font-size: ${p => p.theme.fontSizes.n};
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;

export const UserSpan = styled.span`
  width: 56px;
  margin-right: 8px;
  @media ${p => p.theme.breakpoints.tablet.media} {
    width: 83px;
    margin-right: 24px;
  }
`;
export const EditBtn = styled.button`
  display: flex;
  border-radius: ${p => p.theme.radii.secondaryBorderRadius};
  background-color: ${p => p.theme.colors.mainBackground};
  font-size: ${p => p.theme.fontSizes.xs};
  width: 20px;
  height: 20px;
  padding: 0;
  justify-content: center;
  align-items: center;
  margin-left: auto;

  transition: ${p => p.theme.transitions.normal};

  @media ${p => p.theme.breakpoints.tablet.media} {
    font-size: ${p => p.theme.fontSizes.nl};

    width: 32px;
    height: 32px;
  }

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.hoverBtn};
  }
`;
export const FormBox = styled(Box)`
  background-color: ${p => p.theme.colors.secondaryBackground};
  max-width: 100%;
  @media ${p => p.theme.breakpoints.tablet.media} {
    max-width: 379px;
  }
`;
