import styled from 'styled-components';

export const Card = styled.li``;

export const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;
  border: transparent;
  background: white;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 40px;
  padding-top: 9px;
  padding-bottom: 9px;
  padding-left: 12px;
  padding-right: 40px;
  position: relative;
  border: 1px solid transparent;
  &:hover,
  :active {
    border: 1px solid rgba(245, 146, 86, 0.5);
  }
  @media screen and (min-width: 768px) {
    padding-top: 9px;
    padding-bottom: 9px;
    padding-left: 20px;
    padding-right: 40px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 40px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
`;
