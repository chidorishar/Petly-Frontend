import styled from 'styled-components';

export const GiHamburgerMenuOpen = styled.button`
  font-size: 2em;

  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-left: auto;

  border-radius: 25%;

  background: ${p => p.theme.colors.accentedBackgroundLight};
  cursor: pointer;

  @media (min-width: 768px) {
    margin-left: 25px;
  }
  svg {
    fill: ${p => p.theme.colors.black};
  }
`;
