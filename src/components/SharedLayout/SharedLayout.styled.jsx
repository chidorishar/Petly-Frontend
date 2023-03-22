import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  width: 100vw;
  margin-bottom: ${p => p.theme.space[4]}px;
  padding: ${({ theme: { space } }) => space[3]}px;

  background-color: ${({ theme: { colors } }) => colors.accentSecondary};
  border-bottom: 1px solid;
`;
