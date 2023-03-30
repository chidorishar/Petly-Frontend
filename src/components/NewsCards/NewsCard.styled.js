import styled from 'styled-components';

export const Item = styled.li``;

export const Border = styled.div`
  width: 200px;
  height: 4px;
  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  border-radius: 40px;

  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    width: 280px;
    height: 8px;
  }
  @media ${p => p.theme.breakpoints.desktop.media} {
    width: 340px;
    height: 8px;
  }
`;

export const Title = styled.h2`
  font-weight: ${p => p.theme.fontWeights.logo};
  font-style: normal;
  font-size: ${p => p.theme.fontSizes.ml};
  line-height: 1.37;
  color: ${p => p.theme.colors.heading};
  margin-top: 4px;
  margin-bottom: 16px;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Wrapper = styled.p`
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.text};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.37;
  color: ${p => p.theme.colors.newsText};
  margin-bottom: 20px;
  -webkit-line-clamp: 8;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    margin-bottom: 40px;
    -webkit-line-clamp: 6;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    -webkit-line-clamp: 5;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Date = styled.span`
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.text};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.37;
  color: ${p => p.theme.colors.accentedTextDark};
`;

export const Link = styled.a`
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.37;
  text-align: right;
  text-decoration: underline;
  color: ${p => p.theme.colors.accent};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.hoverBtn};
  }
`;
