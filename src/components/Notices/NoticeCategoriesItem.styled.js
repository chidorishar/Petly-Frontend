import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';
import { InsetButtonCommon } from 'components/common/shared.styled';

export const CardContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  width: 280px;
  height: 100%;

  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 40px 40px;
  border: none;
  cursor: pointer;

  background-color: ${({ theme }) => theme.colors.secondaryBackground};

  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1280px) {
    width: 288px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  justify-content: space-between;
  top: 12px;
  align-items: center;
`;
export const ImgWrapper = styled.div`
  flex-shrink: 0;

  width: 100%;
  height: 288px;

  border: none;
  overflow: hidden;
`;
export const PetImg = styled.img`
  width: 100%;
  object-fit: cover;
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 280px;
  height: 100%;
  padding: 20px 16px 0px 16px;
  padding-bottom: ${p => (p.isOwner ? '12px' : '32px')};

  border: none;
  border-radius: 0px 0px 40px 40px;

  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1280px) {
    width: 288px;
  }
`;
export const CardTitle = styled.h3`
  width: 231px;
  margin-left: 20px;
  margin-right: 37px;
  margin-bottom: 20px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: -0.01em;

  color: #111111;
`;
export const CardList = styled.div`
  width: 231px;
  margin-left: 20px;
  margin-top: 20px;
`;

export const P = styled.p`
  width: 231px;
  margin-top: 8px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */

  color: #111111;
`;
export const Button = styled.button`
  width: 100%;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  border: 2px solid #f59256;
  border-radius: 40px;
  font-size: ${({ theme: { fontSizes } }) => fontSizes[2]}px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.medium};
  color: #f59256;
  padding: 8px 16px;

  background-color: transparent;

  transition: background-color
      ${({ theme: { transitions } }) => transitions.normal},
    color ${({ theme: { transitions } }) => transitions.normal};

  &:hover,
  &focus {
    color: ${({ theme }) => theme.colors.mainBackground};
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;
export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 12px;
  margin-right: auto;
  margin-left: auto;
  border: 2px solid #f59256;
  border-radius: 40px;
  font-size: ${({ theme: { fontSizes } }) => fontSizes[2]}px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.medium};
  color: #f59256;
  padding: 8px 16px;

  background-color: transparent;

  transition: background-color
      ${({ theme: { transitions } }) => transitions.normal},
    color ${({ theme: { transitions } }) => transitions.normal};

  &:hover,
  &focus {
    color: ${({ theme }) => theme.colors.mainBackground};
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;
export const CategoryTitle = styled.p`
  display: flex;
  padding: 6px 20px;
  min-width: 88px;
  font-size: ${({ theme: { fontSizes } }) => fontSizes[0]}px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.medium};
  color: ${({ theme: { colors } }) => colors.dark};
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  align-items: center;
  line-height: 1.2;
  letter-spacing: 0, 04em;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
`;
export const AddToFavBtn = styled(InsetButtonCommon)`
  width: 44px;
  height: 44px;
  border-radius: ${({ theme: { radii } }) => radii.round};
  padding: 0;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  min-width: 44px;
  margin-right: 12px;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  stroke: ${props =>
    props.$favorite
      ? props.theme.colors.warning + '66'
      : props.theme.colors.accent};
  fill: ${props =>
    props.$favorite
      ? props.theme.colors.warning + 'ba'
      : props.theme.colors.accent};

  &:focus,
  &:hover {
    outline: none;

    background-color: ${({ theme }) => theme.colors.accent};
    stroke: ${props =>
      props.$favorite
        ? props.theme.colors.warning + '66'
        : props.theme.colors.accent};
    fill: ${props =>
      props.$favorite
        ? props.theme.colors.warning + '66'
        : props.theme.colors.secondaryBackground};
  }
`;

export const FavoriteIcon = styled(AiFillHeart)`
  fill: inherit;
  stroke: inherit;
  stroke-width: 90px;

  transition: stroke ${({ theme: { transitions } }) => transitions.normal};
  animation: ${props =>
    props.$favorite ? 'beat 0.8s infinite alternate' : 'none'};

  /* fill: ${props =>
    props.$favorite
      ? props.theme.colors.accent
      : props.theme.colors.secondaryBackground}; */

  @keyframes beat {
    to {
      transform: scale(1.1);
    }
  }

  // fill: ;
`;
export const PetInfo = styled.ul`
  list-style: none;
  font-size: ${({ theme: { fontSizes } }) => fontSizes[2]}px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.medium};
  color: ${({ theme: { colors } }) => colors.dark};
`;
export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;

  width: 248px;
  margin-right: auto;
  margin-left: auto;
`;
export const Span = styled.span`
  margin-right: 14px;
`;
