import heart from 'pages/HomePage/images/all/Heart.png';
import heart2x from 'pages/HomePage/images/all/Heart@2x.png';

import heartWEBP from 'pages/HomePage/images/all/Heart.webp';
import heart2xWEBP from 'pages/HomePage/images/all/Heart@2x.webp';

import { HeartImgStyled, LinkStyled } from './Heart.styled';

export const Heart = () => {
  return (
    <LinkStyled
      href="https://happypaw.ua/ua/assistance"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="heart"
    >
      <HeartImgStyled
        srcSetWebp={`${heartWEBP} 1x, ${heart2xWEBP} 2x`}
        srcSetOldTypes={`${heart} 1x, ${heart2x} 2x`}
        placeholderImg={`${heart}`}
        typeOldTypes={'image/png'}
        zIndex={0}
      />
    </LinkStyled>
  );
};
