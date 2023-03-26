import styled from 'styled-components';
import { Box } from 'components/common';
import { ButtonWideCommon } from 'components/common/shared.styled';

export const BackDrop = styled(Box)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${p => p.theme.colors.backdrop};
  top: 0;
  left: 0;
  padding: 30px;
  display: flex;
  justify-content: center;

  opacity: 0;
  pointer-events: none;
  transition: ${p => p.theme.transitions.normal};
  overflow: auto;
  &.active {
    opacity: 1;
    pointer-events: all;
  }
`;
export const ModalBox = styled(Box)`
  padding: 60px 20px 40px;
  border-radius: ${p => p.theme.radii.secondaryBorderRadius};
  background-color: ${p => p.theme.colors.secondaryBackground};
  max-width: 280px;
  height: 900px;
  transform: scale(0.5);
  transition: transform ${p => p.theme.transitions.normal};
  &.active {
    transform: scale(1);
  }
`;
export const PetBox = styled(Box)`
  width: 100%;
`;
export const ImgBox = styled(Box)`
  border-bottom-left-radius: ${p => p.theme.radii.secondaryBorderRadius};
  border-bottom-right-radius: ${p => p.theme.radii.secondaryBorderRadius};
  position: relative;
  margin-bottom: 16px;
  overflow: hidden;
`;
export const CategoryBox = styled(Box)`
  position: absolute;
  left: 0;
  top: 20px;
  padding-left: 20px;
  width: 158px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(50px);
`;
export const PetTitle = styled.p`
  font-size: ${p => p.theme.fontSizes.ml};
  font-weight: ${p => p.theme.fontWeights.logo};
  line-height: ${p => p.theme.lineHeights.body};
  letter-spacing: -0.01em;
  margin-bottom: 16px;
`;
export const PetInfo = styled.ul`
  margin-bottom: 28px;
`;
export const PetInfoItem = styled.li`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.heading};
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  .userContact {
    text-decoration: none;
    color: ${p => p.theme.colors.heading};
    &:focus,
    &:hover {
      color: ${p => p.theme.colors.hoverBtn};
    }
  }
`;
export const PetInfoItemTitle = styled.span`
  font-weight: ${p => p.theme.fontWeights.semiBold};
  width: 63px;
  margin-right: 55px;
  display: inline-block;
`;
export const PetComments = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.text};
  span {
    font-weight: ${p => p.theme.fontWeights.semiBold};
  }
  margin-bottom: 40px;
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
  border: 1px solid ${p => p.theme.colors.accent};
  padding: 9px;
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
