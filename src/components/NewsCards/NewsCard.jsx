import { dateConverter } from 'utils';

import {
  Item,
  Border,
  Title,
  Wrapper,
  Box,
  Date,
  Link,
} from './NewsCard.styled';

const NewsCard = newItem => {
  const { date, description, title, url } = newItem.newItem;

  const text = description?.slice(0, 350) + '...';
  const name = title?.length < 50 ? title : title?.slice(0, 50) + '...';

  return (
    <>
      <Item>
        <Border></Border>
        <Title>{name}</Title>
        <Wrapper>{text}</Wrapper>
        <Box>
          <Date>{dateConverter(date, 'dd/MM/yyyy')}</Date>
          <Link href={url} target="_blank" rel="noreferrer">
            Read more
          </Link>
        </Box>
      </Item>
    </>
  );
};

export default NewsCard;
