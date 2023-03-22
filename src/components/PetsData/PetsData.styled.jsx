import styled from 'styled-components';

export const PetsContainer = styled.div`
  width: 821px;
`;

export const PetsTitle = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 38px;

  margin-bottom: 24px;
  color: #111;
`;

export const PetsItem = styled.li`
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  padding: 20px;
  display: flex;
  &:not(:last-child) {
    margin-bottom: 22px;
  }
`;
