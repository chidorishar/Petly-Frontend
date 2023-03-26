import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  gap: 40px;

  padding: 40px 80px;

  min-width: 608px;

  background: #ffffff;
  border-radius: 40px;
`;

export const WrapperOne = styled(Wrapper)`
  transition: opacity 0.5s ease;

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
`;

export const WrapperTwo = styled(Wrapper)`
  transition: opacity 0.5s ease, transform 0.5s ease;

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

  transform: translate(
    calc(
      -50% + ${({ state }) => {
          switch (state) {
            case 'exited':
              return 300;
            case 'exiting':
              return 300;
            default:
              return 0;
          }
        }}px
    ),
    -50%
  );
`;

export const NoticeDescription = styled.p`
  text-align: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  column-gap: 12px;
  row-gap: 16px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
