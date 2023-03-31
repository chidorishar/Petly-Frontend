import { Box } from 'components/common/Box/Box.styled';
import styled from 'styled-components';

export const PetsTitle = styled.p`
  font-weight: ${p => p.theme.fontWeights.heading};
  color: ${p => p.theme.colors.heading};
  font-size: ${p => p.theme.fontSizes.nl};
  letter-spacing: 0.04em;
  line-height: ${p => p.theme.lineHeights.body};

  transition: color ${({ theme }) => theme.transitions.normal};

  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
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

  transition: color ${({ theme: { transitions } }) => transitions.normal}};  

  &:focus,
  &:hover {
    color: ${p => p.theme.colors.hoverBtn};
  }
`;
export const DataTopBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-grow: 1;

  @media ${p => p.theme.breakpoints.mobile.media} {
    margin-bottom: 20px;
  }
`;
export const AddBox = styled(Box)`
  display: flex;
  align-items: center;
  span {
    font-weight: ${p => p.theme.fontWeights.heading};
    color: ${p => p.theme.colors.heading};
    line-height: ${p => p.theme.lineHeights.body};
    font-size: ${p => p.theme.fontSizes.nl};
    margin-right: 15px;
  }
`;
