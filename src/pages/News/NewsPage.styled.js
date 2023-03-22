import styled from 'styled-components';

export const Card = styled.li``;

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.mainFamily};
  font-weight: ${p => p.theme.fontWeights.logo};

  @media ${p => p.theme.breakpoints.mobile.media} {
    text-align: center;
    margin-bottom: 28px;
    font-size: 24px;
    line-height: 33px;
  }

  @media ${p => p.theme.breakpoints.tablet.media} {
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 66px;
  }
  @media ${p => p.theme.breakpoints.desktop.media} {
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 66px;
  }
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: center;

  @media ${p => p.theme.breakpoints.mobile.media} {
    position: relative;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    width: 280px;
    height: 40px;
  }
  @media ${p => p.theme.breakpoints.tablet.media} {
    margin-bottom: 60px;
    width: 608px;
    height: 44px;
  }
  @media ${p => p.theme.breakpoints.desktop.media} {
    margin-bottom: 60px;
    width: 608px;
    height: 44px;
  }
`;

export const Input = styled.input`
  @media ${p => p.theme.breakpoints.mobile.media} {
    width: 100%;
    height: 44px;
    border: transparent;
    background: white;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    border-radius: 40px;
    padding-top: 9px;
    padding-bottom: 9px;
    padding-left: 12px;
    padding-right: 40px;
    position: relative;
    border: 1px solid transparent;
    &:hover,
    :active {
      border: 1px solid rgba(245, 146, 86, 0.5);
    }
  }

  @media ${p => p.theme.breakpoints.tablet.media} {
    padding-top: 9px;
    padding-bottom: 9px;
    padding-left: 20px;
    padding-right: 40px;
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 40px;
  }
`;

export const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;
