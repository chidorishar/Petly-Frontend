import styled from 'styled-components';
import { Box } from 'components/common/Box/Box.styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  max-width: 280px;
  margin: auto;
  gap: 20px;
  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    max-width: 704px;
    margin-top: 24px;
  }
  @media ${p => p.theme.breakpoints.desktop.media} {
    max-width: 821px;
  }
`;
export const ListItem = styled(Box)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  background-color: ${({ theme: { colors } }) => colors.secondaryBackground};
  border-radius: ${({ theme: { radii } }) => radii.secondaryBorderRadius};
  padding: 16px 20px 40px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.11);

  transition: background-color ${({ theme }) => theme.transitions.normal};

  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    flex-direction: row;
    padding: 20px;
    border-radius: ${({ theme: { radii } }) => radii.mainBorderRadius};
  }
`;
export const NameBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${p => p.theme.breakpoints.mobile.media} {
    position: relative;
  }
`;
export const PetImg = styled.img`
  flex-shrink: 0;

  width: 240px;
  height: 240px;
  border-radius: ${({ theme: { radii } }) => radii.secondaryBorderRadius};
  margin-bottom: 20px;

  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    width: 161px;
    height: 161px;
    display: block;
    margin-right: 32px;
    margin-bottom: 0;
    max-width: 161px;
  }
`;
export const PetInfo = styled.ul`
  flex-grow: 1;

  list-style: none;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.medium};
  color: ${({ theme: { colors } }) => colors.dark};
  li {
    :not(:last-child) {
      margin-bottom: 12px;
    }

    font-size: ${({ theme: { fontSizes } }) => fontSizes.s};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.text};
    line-height: ${({ theme: { lineHeights } }) => lineHeights.body};
    letter-spacing: 0.04em;
    span {
      font-weight: ${({ theme: { fontWeights } }) => fontWeights.heading};
    }
  }
  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    width: 100%;
    position: relative;
    li {
      font-size: ${({ theme: { fontSizes } }) => fontSizes.m};
    }
  }
`;
export const DeleteBtn = styled.button`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.nl};

  position: absolute;
  right: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;
  padding: 0;

  border-radius: ${({ theme: { radii } }) => radii.round};

  color: ${({ theme: { colors } }) => colors.inputText};
  background-color: ${({ theme: { colors } }) => colors.white};

  transition: color ${({ theme: { transitions } }) => transitions.normal};

  &:focus,
  &:hover {
    outline: none;

    color: ${({ theme: { colors } }) => colors.hoverBtn};
  }

  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    font-size: ${p => p.theme.fontSizes.ml};

    width: 44px;
    height: 44px;

    background-color: ${({ theme: { colors } }) => colors.mainBackground};

    &:focus,
    &:hover {
      color: ${({ theme: { colors } }) => colors.hoverBtn};
      background-color: ${({ theme: { colors } }) => colors.mainBackground};
    }
  }
`;
