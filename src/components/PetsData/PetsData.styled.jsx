import { Box } from 'components/common/shared.styled';
import styled from 'styled-components';

export const PetsTitle = styled.p`
  font-family: ${p => p.theme.fonts.mainFamily};
  font-weight: ${p => p.theme.fontWeights.heading};
  color: ${p => p.theme.colors.heading};
  font-size: 20px;
`;
export const AddPetBtn = styled.button``;
export const DataTopBox = styled(Box)`
  display: flex;
  justify-content: space-between;
`;
export const AddBox = styled(Box)`
  display: flex;
  align-items: center;
  span {
    font-family: ${p => p.theme.fonts.mainFamily};
    font-weight: ${p => p.theme.fontWeights.heading};
    color: ${p => p.theme.colors.heading};
    font-size: 20px;
    margin-right: 15px;
  }
`;
