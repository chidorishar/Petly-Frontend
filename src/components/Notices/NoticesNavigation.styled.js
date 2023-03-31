import styled from 'styled-components';
import { IoAddOutline } from 'react-icons/io5';

export const Wrapper = styled.div`
  position: relative;

  padding-top: 28px;

  @media screen and (min-width: 768px) {
    max-width: 500px;
    padding-top: 40px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1000px;
  }
`;

export const Button = styled.button`
  padding: 10px 28px;
  border: 2px solid ${p => p.theme.colors.accent};
  border-radius: 40px;
  margin-right: 12px;
  margin-top: 12px;

  transition: ${({ theme }) => theme.transitions.normal};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.mainBackground};
    background-color: ${p => p.theme.colors.hoverBtn};
  }

  background: ${props =>
    props.selected ? props.theme.colors.accent : 'transparent'};
  color: ${props =>
    props.selected
      ? props.theme.colors.mainBackground
      : props.theme.colors.accentedTextLight};
`;

export const AddPetBtn = styled.button`
  position: fixed;
  z-index: 1;

  width: 80px;
  height: 80px;
  border-radius: ${({ theme: { radii } }) => radii.round};
  border: ${({ theme: { borders } }) => borders.small} #f59256;
  padding: 0;
  background: ${({ theme }) => theme.colors.accent};
  min-width: 44px;
  transform: translateX(-107%);
  bottom: 15vh;

  transition: ${({ theme }) => theme.transitions.normal};

  color: ${({ theme }) => theme.colors.accent};

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.hoverBtn};
  }

  @media screen and (min-width: 768px) {
    position: static;

    width: 44px;
    height: 44px;
    padding-top: 2px;
    margin-left: 12px;

    transform: none;
  }
`;

export const CommonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 288px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const Icon = styled(IoAddOutline)`
  position: absolute;

  width: 21px;
  height: 21px;
  color: #fff;
  top: 20px;
  right: 29px;

  @media screen and (min-width: 768px) {
    position: none;

    width: 17.49px;
    height: 17.49px;
    position: static;
  }
`;
export const Span = styled.span`
  position: absolute;
  left: 10px;

  min-width: 60px;
  margin-right: 26px;

  color: ${({ theme }) => theme.colors.textLight};

  @media screen and (min-width: 768px) {
    position: absolute;
    left: -60px;
    color: #000;
  }

  @media ${({ theme }) => theme.breakpoints.tablet.mediaFrom} {
    color: ${({ theme }) => theme.colors.heading};
  }
`;
