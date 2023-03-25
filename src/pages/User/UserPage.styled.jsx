import styled from 'styled-components';

export const UserPageContainer = styled.div`
  width: 100%;
  display: flex;
  padding-top: 61px;

  @media ${p => p.theme.breakpoints.mobileOnly.media} {
    flex-direction: column;
  }

  @media ${p => p.theme.breakpoints.tablet.media} {
    padding-top: 88px;
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    padding-top: 58px;
  }
`;

export const UserTitle = styled.p`
  margin-bottom: 18px;

  color: #000;

  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;

  @media ${p => p.theme.breakpoints.tablet.media} {
    margin-bottom: 40px;

    color: #111;

    font-size: 28px;
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    margin-bottom: 24px;
  }
`;

export const UserInfoContainer = styled.div`
  @media ${p => p.theme.breakpoints.mobile.media} {
    width: 280px;
  }

  @media ${p => p.theme.breakpoints.tablet.media} {
    width: 704px;
  }
  @media ${p => p.theme.breakpoints.desktop.media} {
    width: 411px;
  }
`;

export const UserWrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  padding: 20px 16px;

  @media ${p => p.theme.breakpoints.tablet.media} {
    flex-direction: row-reverse;
    width: 736px;
    padding-top: 88px;
    position: relative;
    left: -32px;
    border-radius: 0 40px 40px 0;
    padding: 24px 40px 24px 32px;
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    flex-direction: column;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    padding: 24px 32px;
    width: 100%;
  }
`;
