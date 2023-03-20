import styled from 'styled-components';
export const SvgIcon = styled.svg`
  width: 20px;
  height: 20px;
  @media ${p => p.theme.breakpoints.tablet.media} {
    width: 24px;
    height: 24px;
  }
`;
