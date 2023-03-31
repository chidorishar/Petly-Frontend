import styled from 'styled-components';

export const ToggleButton = styled.button`
  position: relative;

  display: block;

  width: 40px;
  height: 40px;
  margin-left: 40px;
  padding: 15px 15px;

  background: transparent;
  border-radius: 3px;

  cursor: pointer;
  transition: background-color ${p => p.theme.transitions.normal};

  & > svg > path {
    fill-rule: nonzero;
    fill: #aaa;

    transition: fill ${p => p.theme.transitions.normal};
  }

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accent};
    & > svg {
      stroke: red;
    }

    & > svg > path {
      fill: #fffb32;
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
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    margin-right: 40px;
  }
`;
