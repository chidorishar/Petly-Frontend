import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  margin-top: 40px;
  gap: 12px;
  @media ${p => p.theme.breakpoints.tablet.media} {
    grid-template-columns: 1fr 1fr;
    margin-top: 45px;
    gap: 32px;
  }
  @media ${p => p.theme.breakpoints.desktop.media} {
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 60px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  line-height: 1.375;
  margin: 0;
  @media ${p => p.theme.breakpoints.tablet.media} {
    font-size: 48px;
  }
`;
