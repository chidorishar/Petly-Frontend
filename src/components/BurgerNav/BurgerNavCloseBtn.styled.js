import styled from 'styled-components';

export const GiHamburgerMenuClose = styled.button`
  font-size: 2em;

  padding: 7px;
  padding-bottom: 2px;
  margin-left: auto;

  border-radius: 10px;

  background: ${p => p.theme.colors.mainBackground};

  &:hover,
  &:focus {
    & > svg > path {
      stroke: ${p => p.theme.colors.accent};
    }
  }

  & > svg > path {
    transition: ${p => p.theme.transitions.normal};

    stroke: ${p => p.theme.colors.darkMain};
  }
`;
