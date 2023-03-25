import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';
import { HiOutlineXCircle } from 'react-icons/hi';

export const Form = styled.form`
  position: relative;
  width: 280px;
  height: 33px;
  margin-top: 42px;
  margin-right: auto;
  margin-left: auto;
  @media screen and (min-width: 768px) {
    width: 492px;
    height: 44px;
  }
  @media screen and (min-width: 1280px) {
    width: 608px;
    height: 44px;
  }
`;

export const Input = styled.input`
  position: relative;
  width: 100%;
  height: 33px;
  // margin-right: auto;
  // margin-left: auto;
  // left: 0;
  // top: 0;
  padding: 10px;
  z-index: 1;

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

export const IconHiSearch = styled(HiSearch)`
  width: 14.57px;
  height: 14.57px;
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

export const Button = styled.button`
  border: 1px solid transparent;
  position: absolute;
  background: #fff;

  z-index: 2;
  border-radius: 50%;
  top: 5px;
  right: 5px;
  @media screen and (min-width: 768px) {
    top: 10px;
    right: 10px;
  }
`;
