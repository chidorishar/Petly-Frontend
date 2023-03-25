import styled from 'styled-components';
import { InputCommon } from 'components/common/shared.styled';

export const UserImageWrapper = styled.div`
  width: 233px;
  height: 233px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto 66px auto;
  background-color: transparent;

  @media ${p => p.theme.breakpoints.tablet.media} {
    margin-bottom: 0;
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    margin-bottom: 36px;
  }
`;

export const UserImage = styled.img`
  border-radius: 50%;
  object-fit: contain;
`;

export const EditPhotoLabel = styled.label`
  display: flex;
  padding: 0;
  position: absolute;
  bottom: -34px;
  right: 0;

  white-space: nowrap;
  cursor: pointer;
  background-color: #fff;
  color: black;

  font-size: 12px;
  line-height: 1.83;
  letter-spacing: 0.04em;

  @media ${p => p.theme.breakpoints.tablet.media} {
    bottom: -25px;
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    right: -74px;
    bottom: 0;
  }
`;

export const AvatarInput = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

export const EditAvatarIcon = styled.svg`
  width: 20px;
  height: 20px;
  margin-right: 4px;
  fill: #f59256;

  transition: fill 250ms ease-in-out;

  &:hover {
    fill: #ff6101;
  }
`;

export const FormWrapper = styled.div`
  @media ${p => p.theme.breakpoints.tablet.media} {
    margin-right: 52px;
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    margin-right: 0;
  }
`;

// <- Стилі для компонента з формою, можна видалити після додавання компонента
export const Form = styled.form`
  margin-bottom: 44px;

  @media ${p => p.theme.breakpoints.tablet.media} {
    margin-bottom: 33px;
    padding-top: 16px;
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    padding-top: 0;
    margin-bottom: 24px;
  }
`;

export const UserLabel = styled.label`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.04em;
  display: flex;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const UserSpan = styled.span`
  width: 107px;
`;

export const UserInput = styled(InputCommon)`
  border: none;
  background-color: transparent;
  margin: 0;
  width: 272px;
  font-weight: 400;

  &.enabled {
    background-color: red;
  }
`;
// Стилі для компонента з формою, можна видалити після додавання компонента ->
