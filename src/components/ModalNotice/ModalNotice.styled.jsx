import styled from 'styled-components';
import { Box } from 'components/common';
import { ButtonWideCommon } from 'components/common/shared.styled';

export const BackDrop = styled(Box)`
  position: fixed;
  z-index: 101;

  width: 100vw;
  height: 100vh;
  background-color: ${p => p.theme.colors.backdrop};
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  opacity: 0;
  pointer-events: none;

  justify-content: flex-start;
  flex-shrink: 0;
  overflow: hidden;
  overflow-y: auto;

  overflow: auto;

  opacity: 1;
  pointer-events: all;
`;
export const ModalBox = styled(Box)`
  padding: 60px 20px 40px;
  margin: auto;
  border-radius: ${p => p.theme.radii.secondaryBorderRadius};
  background-color: ${p => p.theme.colors.secondaryBackground};
  max-width: 280px;
  height: min-content;
  transform: scale(0.5);

  transform: scale(1);

  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    max-width: 704px;
    padding-top: 32px;
    border-radius: ${p => p.theme.radii.mainBorderRadius};
  }
`;
export const PetBox = styled(Box)`
  width: 100%;
  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    display: flex;
    flex-wrap: wrap;
  }
`;
export const ImgBox = styled(Box)`
  position: relative;
  margin-bottom: 16px;
  border-radius: 0 0 40px 40px;
  overflow: hidden;
  img {
    width: 100%;
  }
  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    width: 288px;
    max-height: 328px;
    margin-right: 20px;
    img {
      width: 100%;
    }
  }
`;
export const CategoryBox = styled(Box)`
  position: absolute;
  left: 0;
  top: 20px;
  padding: 6px 20px;
  width: 158px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(50px);
  p {
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: ${p => p.theme.lineHeights.body};
  }
`;
export const InfoBox = styled(Box)`
  flex-grow: 1;
`;
export const PetTitle = styled.p`
  font-size: ${p => p.theme.fontSizes.ml};
  font-weight: ${p => p.theme.fontWeights.logo};
  line-height: ${p => p.theme.lineHeights.body};
  letter-spacing: -0.01em;
  margin-bottom: 16px;
  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    font-size: ${p => p.theme.fontSizes.mll};
    line-height: 1.36;
    margin-bottom: 20px;
  }
`;
export const PetInfo = styled.ul`
  margin-bottom: 28px;
`;
export const PetInfoItem = styled.li`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.heading};

  display: flex;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
  .userContact {
    overflow-y: auto;

    text-decoration: none;

    color: ${p => p.theme.colors.heading};
    &:focus,
    &:hover {
      color: ${p => p.theme.colors.hoverBtn};
    }
  }
  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    font-size: ${p => p.theme.fontSizes.m};
    line-height: 1.36;
  }
`;
export const PetInfoItemTitle = styled.span`
  font-weight: ${p => p.theme.fontWeights.semiBold};

  flex-shrink: 0;

  width: 63px;
  margin-right: 55px;
  display: inline-block;
`;
export const PetComments = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.text};

  width: 100%;

  span {
    font-weight: ${p => p.theme.fontWeights.semiBold};
  }
  margin-bottom: 40px;

  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    font-size: ${p => p.theme.fontSizes.m};
    margin-bottom: 32px;
  }
`;

export const PhoneLink = styled(ButtonWideCommon)`
  width: 100%;
  border-radius: ${p => p.theme.radii.mainBorderRadius};
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.secondaryBackground};
  transition: ${p => p.theme.transitions.normal};
  background-color: ${p => p.theme.colors.accent};
  line-height: ${p => p.theme.lineHeights.body};
  font-weight: ${p => p.theme.fontWeights.heading};
  letter-spacing: 0.04em;
  padding: 9px 0;
  margin: 0;
  margin-bottom: 12px;
  &:focus,
  &:hover {
    background-color: ${p => p.theme.colors.hoverBtn};
  }
  a {
    display: block;
    width: 100%;
    text-decoration: none;
    color: inherit;
  }
  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    max-width: 160px;
    margin-bottom: 0;
    order: 5;
    margin-right: 20px;
  }
`;
export const AddToFavoriteBtn = styled(ButtonWideCommon)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${p => p.theme.radii.mainBorderRadius};
  width: 100%;
  margin: 0;
  line-height: ${p => p.theme.lineHeights.body};
  font-weight: ${p => p.theme.fontWeights.heading};
  letter-spacing: 0.04em;
  background-color: ${p => p.theme.colors.secondaryBackground};
  border: 2px solid ${p => p.theme.colors.accent};
  padding: 8px;
  .addIcon {
    color: ${p => p.theme.colors.accent};
    margin-left: 8px;
    transition: color ${p => p.theme.transitions.normal};
  }
  &:focus,
  &:hover {
    background-color: ${p => p.theme.colors.hoverBtn};
    color: ${p => p.theme.colors.secondaryBackground};
    .addIcon {
      color: ${p => p.theme.colors.secondaryBackground};
      margin-left: 8px;
    }
  }
  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    max-width: 160px;
    order: 4;
    margin-left: auto;
    margin-right: 12px;
  }
`;
export const CloseBtn = styled(ButtonWideCommon)`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  width: 34px;
  height: 34px;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.mainBackground};
  backdrop-filter: blur(2px);
  color: ${p => p.theme.colors.heading};
  border-radius: ${p => p.theme.radii.round};
  transition: background-color ${p => p.theme.transitions.normal};
  margin: 0;
  &:focus,
  &:hover {
    background-color: ${p => p.theme.colors.hoverBtn};
  }
`;
