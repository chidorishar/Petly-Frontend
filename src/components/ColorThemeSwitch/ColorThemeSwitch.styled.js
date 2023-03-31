import styled from 'styled-components';

export const ToggleButton = styled.button`
  --iconShadowColor: ${p => (p.$isDarkMode ? '#965d15' : '#f27363')};
  position: relative;

  display: block;

  width: 40px;
  height: 40px;
  margin: 0;
  padding: 15px 15px;

  background: transparent;
  border-radius: 3px;

  cursor: pointer;
  transition: background-color ${p => p.theme.transitions.normal};

  & > svg > path {
    fill-rule: nonzero;
    /*  #aaa; */ //grey
    /* #f37164 */ //mango
    /* #fffb32 */ //yellow
    fill: ${p => (p.$isDarkMode ? '#fffb32' : '#f27363')};

    transition: fill ${p => p.theme.transitions.normal};
  }

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accent};
    /* #e4c312 */
    & > svg > path {
      fill: ${p => p.theme.colors.darkMain};
    }
  }

  & > svg {
    position: relative;
    top: -20px;
    left: -20px;

    width: 40px;
    height: 40px;
    margin: 0;
    padding: 0;

    filter: drop-shadow(var(--iconShadowColor) 7px 8px 6px);
  }
`;
