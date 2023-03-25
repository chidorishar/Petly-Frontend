import { NoticesSearch } from 'components/Notices/NoticesSearch';
import { NoticesTitle } from 'components/Notices/NoticesTitle';
import { NoticesNavigation } from 'components/Notices/NoticesNavigation';
import { NoticesCategoriesList } from 'components/Notices/NoticesCategoriesList';
import getNotices from './getNotices';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const NoticesPage = () => {
  const [notices, setNotices] = useState([]);
  // const [category, setCategory] = useState('sell');
  // const [search, setSearch] = useState('');

  const fetchNotices = async () => {
    try {
      const noticesArray = await getNotices();
      setNotices(noticesArray);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  // useEffect(() => {});
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('a'));
  // console.log('today', Date.now());
  // const date = '2023-03-22T22:00:00.000Z';
  // const birthday = new Date(date);
  // const today = Date.now();
  // const age = (today - birthday) / (1000 * 60 * 60 * 24 * 30);
  // console.log('birthday', birthday);
  // console.log(' age', age);
  // const noticeName = searchParams.get('name') ?? '';

  // const visibleNotices = notices.filter(notice =>
  //   notice.name.toLowerCase().includes(noticeName.toLowerCase())
  // );

  const updateQueryString = e => {
    setSearchParams({ query: e.target.value });
  };
  console.log(searchParams.get('name'));

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const query = form.elements.name.value;
    // const password = form.elements.password.value;
    console.log('q ', query);
    // this.props.onSubmit({ login, password });
    // form.reset();
  };
  return (
    <div>
      <NoticesTitle />
      <NoticesSearch
        // value={query}
        onChange={updateQueryString}
        onSubmit={handleSubmit}
      />
      <NoticesNavigation />
      <NoticesCategoriesList notices={notices} />
    </div>
  );
};
