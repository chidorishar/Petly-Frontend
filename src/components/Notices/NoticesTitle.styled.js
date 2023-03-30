import styled from 'styled-components';

export const Title = styled.h1`
  position: relative;
  width: 280px;
  height: 33px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 42px;

  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */

  text-align: center;
  color: #111111;

  @media screen and (min-width: 768px) {
    width: 492px;
    height: 66px;
    font-weight: 700;
    font-size: 48px;
    line-height: 66px;
    /* line-height: 1; */
    margin-top: 88px;
    white-space: nowrap;
  }
  @media screen and (min-width: 1280px) {
    width: 492px;
    height: 66px;
    font-weight: 700;
    font-size: 48px;
    /* line-height: 1; */
    margin-top: 70px;
    white-space: nowrap;
  }
`;
