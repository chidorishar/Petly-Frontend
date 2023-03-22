import styled from 'styled-components';
import { IoAddOutline } from 'react-icons/io5';

export const Wrapper = styled.div`
  position: relative;
  margin-top: 36px;
  // margin-right: auto;
  // margin-left: auto;
`;

export const Button = styled.button`
  padding: 10px 28px;
  border: 2px solid #f59256;
  border-radius: 40px;
  margin-right: 12px;
  margin-top: 12px;
`;
export const AddPetBtn = styled.button`
  width: 80px;
  height: 80px;
  border-radius: ${({ theme: { radii } }) => radii.round};
  border: ${({ theme: { borders } }) => borders.small} #f59256;
  padding: 0;
  background: #f59256;
  min-width: 44px;
  position: absolute;
  top: 200px;
  right: 5px;
  z-index: 99;

  color: #fff;
  @media screen and (min-width: 768px) {
    margin-left: 12px;
    position: static;
    width: 44px;
    height: 44px;
  }
`;

export const CommonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 288px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    max-width: 732px;
  }
  @media screen and (min-width: 1000px) {
    max-width: 864px;
  }
`;

export const Icon = styled(IoAddOutline)`
  width: 21px;
  height: 21px;
  color: #fff;
  position: absolute;
  top: 20px;
  right: 27px;
  @media screen and (min-width: 768px) {
    width: 17.49px;
    height: 17.49px;
    position: static;
  }
`;
export const Span = styled.span`
  position: absolute;
  top: 240px;
  right: 15px;
  color: #fff;
  z-index: 100;
  min-width: 60px;
  @media screen and (min-width: 768px) {
    position: static;
    color: #000;
  }
`;
