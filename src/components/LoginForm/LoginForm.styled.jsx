import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContainerCardCommon = styled.div`
  max-width: 618px;
  margin: 0 auto;
  padding: 60px 40px;
  text-align: center;
  border-radius: ${p => p.theme.radii.mainBorderRadius};
  background-color: ${({ theme: { colors } }) => colors.secondaryBackground};
  box-shadow: 7px 4px 14px 0px #0000001c;
  @media ${p => p.theme.breakpoints.desktop.media} {
    max-width: 618px;
    width: 100%;
  }
  @media ${p => p.theme.breakpoints.tablet.mediaFrom} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow-y: auto;

    max-height: 524px;
    height: 80vh;
    max-width: 608px;
    width: 100%;
  }

  @media ${p => p.theme.breakpoints.mobile.media} {
    width: 100%;
    margin: 0;
    padding-top: 54px;
    padding: 0;
    border: none;
    border-radius: 22px;
    background-color: ${({ theme: { colors } }) => colors.mainBackground};
    box-shadow: none;
  }
`;

export const Title = styled.h2`
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: ${p => p.theme.fontSizes.lx};
  color: ${({ theme: { colors } }) => colors.heading};
  @media ${p => p.theme.breakpoints.mobile.media} {
    font-weight: ${p => p.theme.fontWeights.logo};
    font-size: ${p => p.theme.fontSizes.ml};
  }
`;

export const FormCommon = styled.form`
  padding: 40px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  letter-spacing: 0.04em;

  @media (max-width: 767px) {
    padding: 40px 0;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;

  @media (max-width: 767px) {
    padding: 11px 14px 12px 14px;
    border-radius: 20px;
  }

  width: 100%;
  margin: 0 auto;
  padding: 14px 32px;

  border-radius: 26px;
  border: none;
  outline: ${p => p.theme.borders.inputModal}
    ${({ theme: { colors } }) => colors.inputModal};
  background-color: ${({ theme: { colors } }) => colors.mainBackground};
  transition: border ${({ theme: { transitions } }) => transitions.normal};

  &:nth-child(2) {
    margin-top: 40px;
  }

  &:nth-last-child(3) {
    margin-top: 20px;
  }

  &:nth-child(3) {
    margin-top: 0;
  }

  &:nth-child(1) {
    margin-top: 0;
  }

  &:hover,
  &:focus {
    outline-width: 2px;
  }
`;

export const InputCommon = styled.input`
  font-size: ${p => p.theme.fontSizes.n};
  font-weight: ${p => p.theme.fontWeights.text};
  background-color: ${({ theme: { colors } }) => colors.mainBackground};
  color: ${({ theme: { colors } }) => colors.inputText};
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  @media ${p => p.theme.breakpoints.mobile.media} {
    font-size: ${p => p.theme.fontSizes.s};
  }
`;

export const IconInput = styled.div`
  display: flex;
  align-items: center;

  @media ${p => p.theme.breakpoints.mobile.media} {
    max-height: 16px;
  }
`;

export const TextMessage = styled.p`
  font-weight: ${p => p.theme.fontWeights.text};
  font-size: ${p => p.theme.fontSizes.s};
  letter-spacing: 0.04em;
  text-align: left;

  margin: 0 auto 0 32px;

  &:nth-child(2) {
    margin-bottom: 20px;
  }
  padding: 0;

  color: ${({ theme: { colors } }) => colors.warningText};
`;

export const Button = styled.button`
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: ${p => p.theme.fontSizes.nl};
  letter-spacing: 0.04em;

  margin-top: 40px;
  padding: 10.5px;
  border-radius: 24px;

  @media ${p => p.theme.breakpoints.desktop.media} {
    margin-top: 40px;
    padding: 10.5px;
    border-radius: 24px;
  }

  @media (max-width: 1279px) {
    margin-top: 40px;
    padding: 8.5px;
    border-radius: 22px;
  }

  background: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.secondaryBackground};

  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  :hover,
  :focus {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
  :hover:before {
    left: 100%;
  }

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.6),
      transparent
    );
    transition: all 650ms;
  }
`;

export const Text = styled.p`
  font-weight: ${p => p.theme.fontWeights.text};
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: 0.04em;

  margin: 0 auto;
  padding: 0;

  color: ${({ theme: { colors } }) => colors.inputText};
`;

export const Link = styled(NavLink)`
  color: ${({ theme: { colors } }) => colors.link};
  cursor: pointer;
`;
