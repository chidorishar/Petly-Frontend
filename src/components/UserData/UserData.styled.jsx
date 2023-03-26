import styled from 'styled-components';

export const UserImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 233px;
  height: 233px;
  margin: 0 auto;
  margin-bottom: 70px;

  background-color: transparent;

  @media ${p => p.theme.breakpoints.tablet.media} {
    margin-bottom: 0;
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    margin-bottom: 32px;
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
  bottom: -35px;
  right: 0;
  white-space: nowrap;
  cursor: pointer;

  background-color: transparent;
  color: ${p => p.theme.colors.black};

  font-weight: ${p => p.theme.fontWeights.text};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.83;
  letter-spacing: 0.04em;

  @media ${p => p.theme.breakpoints.tablet.media} {
    bottom: -30px;
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

export const UserDataWrapper = styled.div`
  @media ${p => p.theme.breakpoints.tablet.media} {
    margin-right: 52px;
  }

  @media ${p => p.theme.breakpoints.desktop.media} {
    margin-right: 0;
  }
`;
