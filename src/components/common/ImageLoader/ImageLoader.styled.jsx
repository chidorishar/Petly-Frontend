import styled from 'styled-components';

export const ImgPlug = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 208px;
  height: 208px;
  object-fit: cover;
  overflow: hidden;
  margin: 20px 0 0 0;

  border-radius: ${p => p.theme.radii.secondaryBorderRadius};

  transition: background-color ${p => p.theme.transitions.normal},
    transform ${p => p.theme.transitions.normal};

  background-color: ${p => p.theme.colors.accentedBackgroundLight};

  & > svg {
    transition: color ${p => p.theme.transitions.normal},
      transform ${p => p.theme.transitions.normal};
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.darkMain};
    background-color: ${p => p.theme.colors.accent};
    transform: scale(1.05);

    & > svg {
      transform: scale(1.4);
    }
  }

  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    height: 182px;
    width: 182px;
    border-radius: ${p => p.theme.radii.mainBorderRadius};
  }
`;

export const ImgPet = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 208px;
  height: 208px;
  margin: 20px 0 0 0;
  object-fit: cover;
  overflow: hidden;
  background-color: transparent;

  border-radius: ${p => p.theme.radii.secondaryBorderRadius};
  transition: transform ${p => p.theme.transitions.normal};

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    height: 182px;
    width: 182px;
    border-radius: ${p => p.theme.radii.mainBorderRadius};
  }
`;
