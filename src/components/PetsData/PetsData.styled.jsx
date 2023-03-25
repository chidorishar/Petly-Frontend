import styled from 'styled-components';
import { IoAddOutline } from 'react-icons/io5';

export const PetsContainer = styled.div`
  width: 821px;
`;

export const PetsTitleWraper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 24px;
`;

export const PetsTitle = styled.p`
  font-weight: 500;
  font-size: 28px;
  line-height: 38px;

  color: #111;
`;

export const PetsItem = styled.li`
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  padding: 20px;
  display: flex;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 22px;
  }
`;

export const PetsImageWraper = styled.div`
  height: 161px;
  border-radius: 40px;
  overflow: hidden;
  margin-right: 32px;
`;

export const PetsImg = styled.img`
  objectfit: cover;
  width: 100%;
  height: 100%;
`;

export const PetsInfoWrapper = styled.div`
  width: 580px;
`;

export const PetsInfoList = styled.ul`
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
`;

export const PetsInfoItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const PetsSpan = styled.span`
  font-weight: 500;
`;

export const PetsDeleteButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #fdf7f2;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  color: #6f6d6b;

  transition: color 250ms ease-in-out;

  &:hover,
  &:focus {
    color: #f59256;
  }
`;

export const PetsDeleteIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: currentColor;
`;

export const AddPetBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme: { radii } }) => radii.round};
  // border: ${({ theme: { borders } }) => borders.small} #f59256;
  // padding: 0;
  background-color: #f59256;
  color: #fff;
  // min-width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  &:hover {
    background-color: #fff;
    color: #f59256;
    border: 2px solid #f59256;
  }

  @media screen and (min-width: 768px) {
    margin-left: 12px;
    width: 44px;
    height: 44px;
  }
`;

export const Icon = styled(IoAddOutline)`
  width: 24px;
  height: 24px;
  fill: curentColor;
  // @media screen and (min-width: 768px) {
  //   width: 17.49px;
  //   height: 17.49px;
  // }
`;
