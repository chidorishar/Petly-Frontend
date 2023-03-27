import styled from 'styled-components';
import dogMobile from '../../images/homePage/dog-desktop.png';
import dogMobile2x from '../../images/homePage/dog-mobile@2x.png';
import dogTablet from '../../images/homePage/dog-tablet.png';
import dogTablet2x from '../../images/homePage/dog-tablet@2x.png';
import dogDesktop from '../../images/homePage/dog-desktop.png';
import dogDesktop2x from '../../images/homePage/dog-desktop@2x.png';
import waveMobile from '../../images/homePage/wave-mobile.jpg';
import waveMobile2x from '../../images/homePage/wave-mobile@2x.jpg';
import waveTablet from '../../images/homePage/wave-tablet.jpg';
import waveTablet2x from '../../images/homePage/wave-tablet@2x.jpg';
import waveDesktop from '../../images/homePage/wave-desktop.jpg';
import waveDesktop2x from '../../images/homePage/wave-desktop@2x.jpg';
import union from '../../images/homePage/union.png';
import union2x from '../../images/homePage/union@2.png';

export const Heading = styled.h1`
  width: 280px;
  font-weight: 500;
  font-size: 32px;
  line-height: calc(44 / 32);
  @media screen and (min-width: 768px) {
    width: 588px;
    font-size: 68px;
    line-height: calc(100 / 68);
  }
`;
export const DonateImg = styled.img`
  width: 72px;
  height: 62px;
  @media (min-width: 768px) {
    width: 124px;
    height: 108px;
  }
  @media (min-width: 1280px) {
    margin-right: 80px;
  }
  animation: pulse 4s infinite;

  @keyframes pulse {
    50% {
      transform: scale(0.5);
    }
`;
export const Section = styled.section`
  padding-top: 60px;
  min-height: 543px;
  height: calc(100vh - 58px);
  background-repeat: no-repeat;
  background-position: bottom;
  background-image: url(${dogMobile}), url(${waveMobile});
  background-size: 250px 337px, 90vw 415px;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${dogMobile2x}), url(${waveMobile2x});
  }
  @media screen and (min-width: 768px) {
    min-height: 1130px;
    padding-top: 88px;
    background-image: url(${dogTablet}), url(${waveTablet});
    background-size: 645px 715px, 100vw 1033px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${dogTablet2x}), url(${waveTablet2x});
    }
  }
  @media screen and (min-width: 1280px) {
    padding-top: 92px;
    padding-bottom: 408px;
    min-height: 704px;
    height: calc(100vh - 64px);
    background-image: url(${dogDesktop}), url(${waveDesktop}), url(${union});
    background-size: 500px 600px, 80vw calc(105vw * 0.275), 92px 89px;
    background-position-x: calc(50% + 330px), center, calc(50% + 58px);
    background-position-y: bottom, bottom, calc(50% - 244px);
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${dogDesktop2x}), url(${waveDesktop2x}),
        url(${union2x});
    }
  }
`;
