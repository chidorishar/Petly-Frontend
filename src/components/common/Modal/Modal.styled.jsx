import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${p => p.theme.colors.inputText};
  backdrop-filter: blur(10px);
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  transition: opacity 0.25s ease, transform 0.25s ease;
  pointer-events: none;

  opacity: ${({ state }) => {
    switch (state) {
      case 'exited':
        return 0;
      case 'exiting':
        return 0;
      default:
        return 1;
    }
  }};

  transform: scale(
    ${({ state }) => {
      switch (state) {
        case 'exited':
          return 0.9;
        case 'exiting':
          return 0.9;
        default:
          return 1;
      }
    }}
  );
`;
