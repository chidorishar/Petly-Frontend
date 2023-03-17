import styled from 'styled-components';
import {
  ContainerFrameCommon,
  InsetButtonCommon,
} from 'components/common/shared.styled';

export const LogoutButton = styled(InsetButtonCommon)`
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${({ theme: { colors } }) => colors.light};
`;

export const MenuFrame = styled(ContainerFrameCommon)`
  --p: ${({ theme: { space } }) => space[2]}px;

  position: absolute;
  top: 0;
  right: 15px;
  transform: translateY(50%);

  align-items: center;

  padding: ${({ theme: { space } }) => space[2]}px;
`;

export const UserGreeting = styled.p`
  margin-right: ${p => p.theme.space[2]}px;
`;

export const UserName = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};

  color: ${({ theme: { colors } }) => colors.dark};
`;
