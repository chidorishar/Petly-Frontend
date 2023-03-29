import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import getNews from './getNews';
import { HiOutlineXCircle } from 'react-icons/hi';
import { IoSearchSharp } from 'react-icons/io5';
import {
  Title,
  Form,
  Button,
  Input,
  Box,
  NotFoundBox,
  NotFound,
} from './NewsPage.styled';
import NewsCard from '../../components/NewsCards/NewsCard';

import { Section, Container } from 'components/common';
import { useTranslation } from 'react-i18next';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [search, setSearch] = useState(query);

  const fetchNews = async searchString => {
    try {
      const newsArray = await getNews(searchString);
      const newsRes = newsArray.result;

      setNews(newsRes);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleChange = e => {
    setSearchParams({
      query: e.currentTarget.value.toLocaleLowerCase().trim(),
    });
    setSearch(e.currentTarget.value.toLocaleLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetchNews(search);
  };

  const removeQuery = () => {
    setSearch('');
  };

  const { t } = useTranslation();

  return (
    <Section>
      <Container>
        <Title>{t('news.news')}</Title>
        {/* <ToastContainer /> */}
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="query"
            value={search}
            placeholder={t('news.search')}
            autoFocus
            onChange={handleChange}
          />
          <Button
            type="submit"
            style={{ position: 'absolute', right: '10px', top: '10px' }}
          >
            {!search && <IoSearchSharp size={20} />}
            {search && <HiOutlineXCircle size={20} onClick={removeQuery} />}
          </Button>
        </Form>
        <Box>
          {news.length > 0 ? (
            news.map(newItem => (
              <NewsCard key={newItem._id} newItem={newItem} />
            ))
          ) : (
            <div />
          )}
        </Box>
        {search !== '' && query && news.length === 0 && (
          <NotFoundBox>
            <NotFound>{t('error.notfound')}</NotFound>
          </NotFoundBox>
        )}
      </Container>
    </Section>
  );
};

export default NewsPage;
