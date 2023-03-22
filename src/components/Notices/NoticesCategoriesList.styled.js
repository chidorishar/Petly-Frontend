import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;
  max-width: 280px;
  margin: auto;
  margin-top: 30px;
  gap: 32px;
  @media screen and (min-width: 768px) {
    max-width: 704px;
    grid-template-columns: 1fr 1fr;
    margin-top: 60px;
    gap: 32px;
  }
  @media screen and (min-width: 1080px) {
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 1080px;
    margin-top: 60px;
  }
`;
export const CardWrapper = styled.li`
  width: 100%;
  list-style-type: none;
  border: 1px solid black;
  border-radius: 0px 0px 40px 40px;
  > a {
    text-decoration: none;
  }
  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1280px) {
    width: 288px;
  }
`;
