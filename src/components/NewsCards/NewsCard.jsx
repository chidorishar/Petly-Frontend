import dateConverter from '../../components/NewsCards/dateConverter';
import {
  Item,
  Border,
  Title,
  Wrapper,
  Box,
  Date,
  Link,
} from './NewsCard.styled';

import { useTranslation } from 'react-i18next';

const NewsCard = newItem => {
  const { date, description, title, url } = newItem.newItem;

  const text = description?.slice(0, 350) + '...';
  const name = title?.length < 50 ? title : title?.slice(0, 50) + '...';

  const { t } = useTranslation();

  return (
    <>
      <Item>
        <Border></Border>
        <Title>{name}</Title>
        <Wrapper>{text}</Wrapper>
        <Box>
          <Date>{dateConverter(date)}</Date>
          <Link href={url} target="_blank" rel="noreferrer">
            {t('news.more')}
          </Link>
        </Box>
      </Item>
    </>
  );
};

export default NewsCard;
