import { useMedia } from 'react-use';

import waveMobile from 'pages/HomePage/images/mobile/Waves-mobile.png';
import waveMobile2x from 'pages/HomePage/images/mobile/Waves-mobile@2x.png';
import waveTablet from 'pages/HomePage/images/tablet/Waves-tablet.png';
import waveTablet2x from 'pages/HomePage/images/tablet/Waves-tablet@2x.png';
import waveDesktop from 'pages/HomePage/images/desktop/Waves-desktop.png';
import waveDesktop2x from 'pages/HomePage/images/desktop/Waves-desktop@2x.png';

import waveMobileWEBP from 'pages/HomePage/images/mobile/Waves-mobile.webp';
import waveMobile2xWEBP from 'pages/HomePage/images/mobile/Waves-mobile@2x.webp';
import waveTabletWEBP from 'pages/HomePage/images/tablet/Waves-tablet.webp';
import waveTablet2xWEBP from 'pages/HomePage/images/tablet/Waves-tablet@2x.webp';
import waveDesktopWEBP from 'pages/HomePage/images/desktop/Waves-desktop.webp';
import waveDesktop2xWEBP from 'pages/HomePage/images/desktop/Waves-desktop@2x.webp';

import dogMobile from 'pages/HomePage/images/mobile/dog-mobile.png';
import dogMobile2x from 'pages/HomePage/images/mobile/dog-mobile@2x.png';
import dogTablet from 'pages/HomePage/images/tablet/dog-tablet.png';
import dogTablet2x from 'pages/HomePage/images/tablet/dog-tablet@2x.png';
import dogDesktop from 'pages/HomePage/images/desktop/dog-desktop.png';
import dogDesktop2x from 'pages/HomePage/images/desktop/dog-desktop@2x.png';

import dogMobileWEBP from 'pages/HomePage/images/mobile/dog-mobile.webp';
import dogMobile2xWEBP from 'pages/HomePage/images/mobile/dog-mobile@2x.webp';
import dogTabletWEBP from 'pages/HomePage/images/tablet/dog-tablet.webp';
import dogTablet2xWEBP from 'pages/HomePage/images/tablet/dog-tablet@2x.webp';
import dogDesktopWEBP from 'pages/HomePage/images/desktop/dog-desktop.webp';
import dogDesktop2xWEBP from 'pages/HomePage/images/desktop/dog-desktop@2x.webp';

import { theme } from 'utils';
import { useTranslation } from 'react-i18next';

import {
  Section,
  Heading,
  DogBackground,
  WavesBackground,
  SectionContainer,
} from './HomePage.styled';
import { Heart } from 'components';

const HomePage = () => {
  const isMobile = useMedia(theme.breakpoints.mobile.media);
  const isTablet = useMedia(theme.breakpoints.tablet.media);
  const isDesktop = useMedia(theme.breakpoints.desktop.media);

  const { t } = useTranslation();

  return (
    <Section>
      {isMobile && (
        <>
          {/* WAVES */}
          <WavesBackground
            srcSetWebp={`${waveMobileWEBP} 1x, ${waveMobile2xWEBP} 2x`}
            srcSetOldTypes={`${waveMobile} 1x, ${waveMobile2x} 2x`}
            placeholderImg={`${waveMobile}`}
            typeOldTypes={'image/png'}
            zIndex={0}
          >
            {/* DOG */}
            <DogBackground
              srcSetWebp={`${dogMobileWEBP} 1x, ${dogMobile2xWEBP} 2x`}
              srcSetOldTypes={`${dogMobile} 1x, ${dogMobile2x} 2x`}
              placeholderImg={`${dogMobile}`}
              typeOldTypes={'image/png'}
              zIndex={0}
            >
              <Heart />
            </DogBackground>
          </WavesBackground>
        </>
      )}
      {isTablet && (
        <>
          {/* WAVES */}
          <WavesBackground
            srcSetWebp={`${waveTabletWEBP} 1x, ${waveTablet2xWEBP} 2x`}
            srcSetOldTypes={`${waveTablet} 1x, ${waveTablet2x} 2x`}
            placeholderImg={`${waveTablet}`}
            typeOldTypes={'image/png'}
            zIndex={0}
          >
            {/* DOG */}
            <DogBackground
              srcSetWebp={`${dogTabletWEBP} 1x, ${dogTablet2xWEBP} 2x`}
              srcSetOldTypes={`${dogTablet} 1x, ${dogTablet2x} 2x`}
              placeholderImg={`${dogTablet}`}
              typeOldTypes={'image/png'}
              zIndex={0}
            >
              <Heart />
            </DogBackground>
          </WavesBackground>
        </>
      )}
      {isDesktop && (
        <>
          {/* WAVES */}
          <WavesBackground
            srcSetWebp={`${waveDesktopWEBP} 1x, ${waveDesktop2xWEBP} 2x`}
            srcSetOldTypes={`${waveDesktop} 1x, ${waveDesktop2x} 2x`}
            placeholderImg={`${waveDesktop}`}
            typeOldTypes={'image/png'}
            zIndex={-1}
          ></WavesBackground>
          {/* DOG */}
          <DogBackground
            srcSetWebp={`${dogDesktopWEBP} 1x, ${dogDesktop2xWEBP} 2x`}
            srcSetOldTypes={`${dogDesktop} 1x, ${dogDesktop2x} 2x`}
            placeholderImg={`${dogDesktop}`}
            typeOldTypes={'image/png'}
            zIndex={0}
          >
            <Heart />
          </DogBackground>
        </>
      )}

      <SectionContainer>
        <Heading>{t('main.welcome')}</Heading>
      </SectionContainer>
    </Section>
  );
};

export default HomePage;
