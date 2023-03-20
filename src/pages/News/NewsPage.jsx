import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import getNews from '../News/getNews';

// const News = () => {
//   (async () => {
//     const newsArray = await getNews();
//     const newsResult = newsArray.result;
//     console.log(newsResult);
//   })();
//   return <></>;
// };

const News = () => {
  const [news, setNews] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [search, setSearch] = useState('');

  useEffect(() => {
    const newsPage = async () => {
      try {
        const newsArray = await getNews();
        const newsResult = newsArray.result;
        console.log(newsResult);

        setNews(newsResult);
      } catch (error) {
        console.log(error.message);
      }
    };
    newsPage();
  }, []);

  const handleChange = e => {
    setSearchParams({
      query: e.currentTarget.value.toLocaleLowerCase().trim(),
    });
    setSearch(e.currentTarget.value.toLocaleLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: search });
  };

  const getFilteredNews = () => {
    if (news) {
      return news.filter(
        newsItem =>
          newsItem.title.toLowerCase().includes(search) ||
          newsItem.description.toLowerCase().includes(search)
      );
    }
  };

  const filteredNews = getFilteredNews();

  return (
    <Container>
      <Title>News</Title>
      <ToastContainer />
      <SearchBox onSubmit={handleSubmit}>
        <Input
          type="text"
          name="query"
          value={search}
          placeholder="Search"
          autoFocus
          onChange={handleChange}
        />
        <Button type="submit"></Button>
      </SearchBox>
      <Box>
        {news.length > 0 ? (
          filteredNews.map(newItem => (
            <Card key={newItem._id}>
              <NewsCard newItem={newItem} />
            </Card>
          ))
        ) : (
          <Loader />
        )}
      </Box>
      {search !== '' && query && filteredNews.length === 0 && (
        <NotFoundBox>
          <NotFound>Nothing found. Please, try again.</NotFound>
        </NotFoundBox>
      )}
    </Container>
  );
};

export default News;
