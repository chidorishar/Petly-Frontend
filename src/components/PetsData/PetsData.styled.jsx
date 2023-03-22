import { Box } from 'components/common/Box/Box.styled';
import styled from 'styled-components';

export const PetsTitle = styled.p`
  font-family: ${p => p.theme.fonts.mainFamily};
  font-weight: ${p => p.theme.fontWeights.heading};
  color: ${p => p.theme.colors.heading};
  font-size: ${p => p.theme.fontSizes.nl};
  letter-spacing: 0.04em;
  line-height: ${p => p.theme.lineHeights.body};
  @media ${p => p.theme.breakpoints.tablet.media} {
    font-size: ${p => p.theme.fontSizes.mll};
  }
`;
export const AddPetBtn = styled.button`
  background-color: transparent;
  outline: none;
  color: ${p => p.theme.colors.accent};
  font-size: 40px;
  padding: 0;
  line-height: 0;
  &:focus,
  &:hover {
    color: ${p => p.theme.colors.hoverBtn};
  }
`;
export const DataTopBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const AddBox = styled(Box)`
  display: flex;
  align-items: center;
  span {
    font-family: ${p => p.theme.fonts.mainFamily};
    font-weight: ${p => p.theme.fontWeights.heading};
    color: ${p => p.theme.colors.heading};
    line-height: ${p => p.theme.lineHeights.body};
    font-size: ${p => p.theme.fontSizes.nl};
    margin-right: 15px;
  }
`;
