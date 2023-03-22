import styled from 'styled-components';
import { Box, InsetButtonCommon } from 'components/common/shared.styled';
import { AiOutlineHeart } from 'react-icons/ai';

export const List = styled.ul`
  display: grid;
  margin-top: 30px;
  max-width: 280px;
  margin: auto;
  gap: 32px;
  @media screen and (min-width: 768px) {
    max-width: 704px;
    grid-template-columns: 1fr 1fr;
    margin-top: 60px;
    gap: 32px;
  }
  @media screen and (min-width: 1080px) {
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 1248px;
    margin-top: 60px;
  }
`;
export const PetImg = styled.img`
  width: 100%;
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
export const ItemTitle = styled.p`
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
  color: ${({ theme: { colors } }) => colors.dark};
  font-size: 28px;
  line-height: 1.36;
  letter-spacing: -0.01em;
`;
export const PetInfo = styled.ul`
  list-style: none;
  font-size: ${({ theme: { fontSizes } }) => fontSizes[2]}px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.medium};
  color: ${({ theme: { colors } }) => colors.dark};
`;
export const LearnMoreBtn = styled(InsetButtonCommon)`
  width: 100%;
  margin-bottom: 12px;
  border: 2px solid #f59256;
  border-radius: 40px;
  font-size: ${({ theme: { fontSizes } }) => fontSizes[2]}px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.medium};
  color: #f59256;
  padding: 8px 16px;
`;
export const DeleteBtn = styled(InsetButtonCommon)`
  width: 100%;
  display: flex;
  justify-content: center;
  border: 2px solid #ff6101;
  border-radius: 40px;
  font-size: ${({ theme: { fontSizes } }) => fontSizes[2]}px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.medium};
  color: #ff6101;
  padding: 8px 16px;
`;
export const DeleteBtnTitle = styled.span`
  margin-right: 13px;
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
export const BottomBox = styled(Box)`
  max-width: 248px;
  padding-bottom: 12px;
  margin: auto;
`;
