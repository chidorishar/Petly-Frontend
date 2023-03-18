import getNews from './getNews';

const News = () => {
  (async () => {
    const { news } = await getNews();
    console.log(news);
  })();
  return <></>;
};

export default News;
