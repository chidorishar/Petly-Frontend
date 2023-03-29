import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';
import { HiOutlineXCircle } from 'react-icons/hi';

export const Form = styled.form`
  position: relative;
  width: 280px;
  margin-top: 42px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    width: 492px;
  }
  @media screen and (min-width: 1280px) {
    width: 608px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px 20px;

  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 40px;
  border: 1px solid transparent;

  @media screen and (min-width: 768px) {
    width: 492px;
    height: 44px;
  }
  @media screen and (min-width: 1280px) {
    width: 608px;
    height: 44px;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 0px;
  right: 12px;
  height: 100%;

  border: 1px solid transparent;
  border-radius: 50%;
  background-color: transparent;

  transition: ${({ theme }) => theme.transitions.normal};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media screen and (min-width: 768px) {
    right: 15px;
  }
`;

export const IconHiSearch = styled(HiSearch)`
  width: 14.57px;
  height: 14.57px;

  fill: currentColor;

  @media screen and (min-width: 768px) {
    width: 17.49px;
    height: 17.49px;
  }
`;
export const IconHiOutlineXCircle = styled(HiOutlineXCircle)`
  width: 14.57px;
  height: 14.57px;

  @media screen and (min-width: 768px) {
    width: 17.49px;
    height: 17.49px;
  }
`;
