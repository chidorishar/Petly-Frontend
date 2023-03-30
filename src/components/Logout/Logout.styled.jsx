import styled from 'styled-components';
import { IoLogOutOutline } from 'react-icons/io5';

export const LogOutBtn = styled.button`
  display: flex;
  align-items: center;
  width: 94px;
  padding: 0;

  background-color: transparent;
  color: rgba(17, 17, 17, 0.6);

  transition: color ${p => p.theme.transitions.normal};

  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: 16px;
  line-height: 1.37;
  letter-spacing: 0.04em;

  @media ${p => p.theme.breakpoints.mobileOnly.media} {
    margin-left: auto;
  }

  &:hover {
    color: ${p => p.theme.colors.hoverBtn};
  }
`;

export const LogoutIcon = styled(IoLogOutOutline)`
  width: 20px;
  height: 20px;
  margin-right: 6px;
  opacity: 0.6;

  color: ${p => p.theme.colors.accent};

  transition: color ${p => p.theme.transitions.normal};

  ${LogOutBtn}:hover & {
    color: ${p => p.theme.colors.hoverBtn};
  }
`;
