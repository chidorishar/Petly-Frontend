import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  @media ${p => p.theme.breakpoints.mobile.media} {
    width: ${p => p.theme.breakpoints.mobile.width};
  }
  @media ${p => p.theme.breakpoints.tablet.media} {
    padding-left: 32px;
    padding-right: 32px;
    width: ${p => p.theme.breakpoints.tablet.width};
  }
  @media ${p => p.theme.breakpoints.desktop.media} {
    padding-left: 16px;
    padding-right: 16px;
    width: ${p => p.theme.breakpoints.desktop.width};
  }
`;
