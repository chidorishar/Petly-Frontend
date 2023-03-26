import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';
import { InsetButtonCommon } from 'components/common/shared.styled';

export const CardContainer = styled.div`
  position: relative;
  width: 280px;
  height: 606px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 40px 40px;
  border: none;
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
  width: 100%;
  height: 288px;
  border: none;
`;
export const PetImg = styled.img`
  width: 100%;
  object-fit: cover;
`;
export const CardWrapper = styled.div`
  width: 280px;
  height: 318px;
  padding: 20px 16px 0px 16px;
  // text-align: center;
  border: none;
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
export const CardTitle = styled.h3`
  width: 231px;
  height: 76px;
  margin-left: 20px;
  margin-right: 37px;

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
`;
export const FavoriteIcon = styled(AiOutlineHeart)`
  fill: #f59256;
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
  width: 248px;
  justify-content: center;
  /* align-items: center; */
  margin-right: auto;
  margin-left: auto;
`;
export const Span = styled.span`
  margin-right: 14px;
`;
