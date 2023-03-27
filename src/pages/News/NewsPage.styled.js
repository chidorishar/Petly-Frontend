import styled from 'styled-components';

export const Title = styled.h1`
  font-weight: ${p => p.theme.fontWeights.logo};

  text-align: center;

  color: ${p => p.theme.colors.heading};

  @media ${p => p.theme.breakpoints.mobile.media} {
    margin-bottom: 28px;
    font-size: ${p => p.theme.fontSizes.ml};
    line-height: 33px;
  }

  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
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
  margin: 0 auto 40px;

  @media ${p => p.theme.breakpoints.mobile.media} {
    width: 280px;
    height: 40px;
  }

  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
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

  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
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

export const Box = styled.ul`
  display: grid;
  gap: 40px;
  justify-content: center;
  margin-bottom: 100px;

  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    grid-template-columns: 1fr 1fr;
    gap: 60px 33px;
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 60px 33px;
  }
`;

export const NotFound = styled.p`
  font-size: ${p => p.theme.fontSizes.nl};
  color: red;
  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    font-size: 30px;
  }
`;
export const NotFoundBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
