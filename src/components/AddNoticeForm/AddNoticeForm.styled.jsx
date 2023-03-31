import styled from 'styled-components';

import { male, female, maleWebp, femaleWebp } from '../../images/NoticeAddPet';

import { ImageLoader } from 'components/common';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  gap: 40px;

  padding: 40px 80px;
  max-width: 608px;
  width: 608px;

  color: ${({ theme: { colors } }) => colors.heading};
  background: ${({ theme: { colors } }) => colors.secondaryBackground}};
  border-radius: 40px;

  @media ${p => p.theme.breakpoints.mobile.media} {
    width: 280px;
    padding: 40px 20px;
  }
`;

export const Title = styled.h2`
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.lx};

  color: ${({ theme: { colors } }) => colors.accentedTextDark};
  text-align: center;
  @media ${p => p.theme.breakpoints.mobile.media} {
    font-weight: ${p => p.theme.fontWeights.heading};
    font-size: ${p => p.theme.fontSizes.nl};
  }
`;

export const WrapperOne = styled(Wrapper)`
  width: 100%;
  transition: opacity 0.5s ease;
  opacity: ${({ state }) => {
    switch (state) {
      case 'exited':
        return 0;
      case 'exiting':
        return 0;
      default:
        return 1;
    }
  }};
  @media ${p => p.theme.breakpoints.mobile.media} {
    max-width: 280px;
  }
`;

export const WrapperTwo = styled(Wrapper)`
  transition: opacity 0.5s ease, transform 0.5s ease;
  opacity: ${({ state }) => {
    switch (state) {
      case 'exited':
        return 0;
      case 'exiting':
        return 0;
      default:
        return 1;
    }
  }};

  transform: translate(
    calc(
      -50% + ${({ state }) => {
          switch (state) {
            case 'exited':
              return 300;
            case 'exiting':
              return 300;
            default:
              return 0;
          }
        }}px
    ),
    -50%
  );
`;

export const NoticeDescription = styled.p`
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: ${p => p.theme.fontSizes.nl};
  text-align: center;
  @media ${p => p.theme.breakpoints.mobile.media} {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const Subtitle = styled.p`
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: ${p => p.theme.fontSizes.ml};

  padding-bottom: 12px;
  @media ${p => p.theme.breakpoints.mobile.media} {
    font-size: ${p => p.theme.fontSizes.n};
  }
`;

export const TextMessage = styled.p`
  font-weight: ${p => p.theme.fontWeights.text};
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.warning};
  letter-spacing: 0.04em;
  text-align: left;
  padding-left: 15px;
`;

export const InputCommon = styled.input`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.text};
  background-color: ${({ theme: { colors } }) => colors.mainBackground};
  color: ${({ theme: { colors } }) => colors.inputText};
  width: 100%;
  padding: 11px 16px 10px 16px;
  border: none;
  border-radius: 24px;
  outline: ${p => p.theme.borders.inputModal}
    ${({ theme: { colors } }) => colors.inputModal};
  @media ${p => p.theme.breakpoints.mobile.media} {
    font-size: ${p => p.theme.fontSizes.s};
    padding: 11px 14px 12px 14px;
  }
  &:hover,
  &:focus {
    outline-width: 2px;
  }
`;

export const ContainerAddImage = styled.div`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.text};

  @media ${p => p.theme.breakpoints.mobile.media} {
    font-size: ${p => p.theme.fontSizes.s};
  }
`;

export const InputAddImage = styled.input`
  opacity: 0;

  border: none;
  border-radius: 24px;
  outline: none;
  ze: ${p => p.theme.fontSizes.s};
`;

export const ImageFileReaderAndViewer = styled(ImageLoader)`
  width: 116px;
  height: 116px;

  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    width: 140px;
    height: 140px;
  }
`;

export const InputComments = styled.textarea`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.text};
  background-color: ${({ theme: { colors } }) => colors.mainBackground};
  color: ${({ theme: { colors } }) => colors.inputText};

  width: 100%;
  padding: 11px 16px 10px 16px;
  border: none;
  border-radius: 24px;
  outline: ${p => p.theme.borders.inputModal}
    ${({ theme: { colors } }) => colors.inputModal};
  @media ${p => p.theme.breakpoints.mobile.media} {
    font-size: ${p => p.theme.fontSizes.s};
    vertical-align: sub;
    height: 40px;
    padding: 11px 14px 12px 14px;
  }
  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    font-size: ${p => p.theme.fontSizes.s};
    min-height: 113px;
    vertical-align: top;
  }

  &:hover,
  &:focus {
    outline-width: 2px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 12px;
  row-gap: 16px;
`;

export const OptionsWrapperTwo = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 90px;
  row-gap: 16px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  @media ${p => p.theme.breakpoints.mobile.media} {
    flex-direction: column;
    gap: 12px;
  }
`;

export const ModalButton = styled.button`
  display: inline-block;
  align-items: center;
  justify-content: center;
  padding: 9px 8px 9px 8px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.heading};
  color: ${p => p.theme.colors.heading};
  background-color: ${p => p.theme.colors.secondaryBackground};

  border: ${p => p.theme.borders.primaryBtn};
  border-radius: ${p => p.theme.radii.mainBorderRadius};
  border-color: ${p => p.theme.colors.accent};

  cursor: pointer;
  transition: color ${p => p.theme.transitions.normal},
    box-shadow 250ms ${p => p.theme.transitions.normal};

  :hover,
  :focus {
    color: ${p => p.theme.colors.secondaryBackground};
    border: ${p => p.theme.borders.inputModal};
    border-color: ${p => p.theme.colors.accent};
    background-color: ${p => p.theme.colors.accent};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transform: scale(1.01);
  }

  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    height: 44px;
    width: 180px;
    font-size: ${p => p.theme.fontSizes.nl};
  }
`;

export const ModalButtonDown = styled(ModalButton)`
  background: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.secondaryBackground};

  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    margin-top: 0px;
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.darkLight};
  }
`;

export const SexButton = styled.button`
  display: flex;
  align-items: flex-end;
  text-align: left;
  height: 104px;

  background-repeat: no-repeat;
  background-position: top;
  background-color: ${p => p.theme.colors.secondaryBackground};
  font-size: ${p => p.theme.fontSizes.nl};
  font-weight: ${p => p.theme.fontWeights.heading};
  color: ${p => p.theme.colors.heading};
  &:nth-child(1) {
    background-image: url(${(male, maleWebp)});
  }

  &:nth-child(2) {
    background-image: url(${(female, femaleWebp)});
  }

  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }

  @media ${p => p.theme.breakpoints.mobile.media} {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;
