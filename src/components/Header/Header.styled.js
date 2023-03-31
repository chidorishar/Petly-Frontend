import styled from 'styled-components';

export const HeaderBlok = styled.div`
  display: flex;
  align-items: center;
  padding-top: 16px;
`;

export const AdditionalFunctionalityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-grow: 1;

  @media ${p => p.theme.breakpoints.desktop.media} {
    max-width: 233px;
  }
`;
