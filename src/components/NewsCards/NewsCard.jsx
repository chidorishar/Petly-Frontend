import dateConverter from '../../components/NewsCards/dateConverter';

const NewsCard = newItem => {
  const { date, description, title, url } = newItem.newItem;

  const text = description?.slice(0, 350) + '...';
  const name = title?.length < 50 ? title : title?.slice(0, 50) + '...';

  return (
    <>
      <div>
        <title>
          <span>{title}</span>
          {name}
        </title>
        <p>{text}</p>

        <div>
          <span>{dateConverter(date)}</span>
          <a href={url} target="_blank" rel="noreferrer">
            Read more
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
