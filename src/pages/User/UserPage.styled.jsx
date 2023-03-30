import styled from 'styled-components';
import { Section, Container } from 'components/common';

export const UserPageSection = styled(Section)`
  padding-top: 60px;

  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    padding-top: 90px;
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    padding-top: 60px;
  }
`;

export const UserPageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  @media ${p => p.theme.breakpoints.desktop.media} {
    flex-direction: row;
  }
`;

export const UserInfoContainer = styled.div`
  @media ${p => p.theme.breakpoints.mobile.media} {
    width: 280px;
    margin-bottom: 40px;
  }

  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    width: 704px;
    margin-bottom: 20px;
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    width: 411px;
    margin-right: 16px;
    margin-bottom: 0;
  }
`;

export const UserTitle = styled.p`
  margin-bottom: 18px;

  color: ${p => p.theme.colors.black};

  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: ${p => p.theme.fontSizes.nl};
  line-height: 1.35;

  transition: color ${({ theme }) => theme.transitions.normal};

  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    margin-bottom: 40px;

    color: ${p => p.theme.colors.heading};

    font-size: ${p => p.theme.fontSizes.mll};
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    margin-bottom: 24px;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 16px;
  border-radius: 20px;

  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  background-color: ${p => p.theme.colors.secondaryBackground};

  transition: background-color ${({ theme }) => theme.transitions.normal};

  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    position: relative;
    left: -32px;
    flex-direction: row-reverse;
    width: 736px;
    padding: 24px 40px 24px 32px;

    border-radius: 0 40px 40px 0;
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    left: -16px;
    flex-direction: column;
    width: 100%;
    padding: 20px 16px;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  }
`;
