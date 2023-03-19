import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

export const Wrapper = styled.div`
  //   display: inline-flex;
  //   align-items: center;
  position: relative;
  //   margin-bottom: 16px;
  //   text-transform: uppercase;
`;

export const Input = styled.input`
  position: absolute;
  width: 608px;
  height: 44px;
  left: 336px;
  top: 233px;
  padding: 10px;
  z-index: 1;

  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 40px;
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
`;

export const Button = styled.button`
  border: 2px solid transparent;
  position: absolute;
  left: 900px;
  top: 240px;
  z-index: 2;
  border-radius: 50%;
`;
