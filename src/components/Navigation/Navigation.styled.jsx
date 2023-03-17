import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinksListItem = styled.li`
  display: inline-block;

  &:not(:last-child) {
    margin-right: ${({ theme: { space } }) => space[3]}px;
  }
`;

export const HeaderLink = styled(NavLink)`
  font-size: ${({ theme: { fontSizes } }) => fontSizes[3]}px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.medium};
  color: black;
  text-decoration: none;

  padding: ${({ theme: { space } }) => space[2]}px;
  border-radius: ${({ theme: { radii } }) => radii.big};

  transition: color ${({ theme: { transitions } }) => transitions.normal},
    background-color ${({ theme: { transitions } }) => transitions.normal};

  &.active {
    color: ${({ theme: { colors } }) => colors.light};
    background-color: ${({ theme: { colors } }) => colors.accent};

    &:hover {
      color: ${({ theme: { colors } }) => colors.dark};
    }
  }

  &.disabled {
    color: ${({ theme: { colors } }) => colors.grey};
    pointer-events: none;
  }

  &:hover {
    color: ${({ theme: { colors } }) => colors.accent};
  }
`;
