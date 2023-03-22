import styled from 'styled-components';

export const Section = styled.section`
  min-height: 97vh;
  padding-top: 42px;
  padding-bottom: 100px;
  color: ${p => p.theme.colors.heading};
  @media ${p => p.theme.breakpoints.tablet.media} {
    padding-top: 88px;
  }
  @media ${p => p.theme.breakpoints.desktop.media} {
    padding-top: 60px;
  }
`;
