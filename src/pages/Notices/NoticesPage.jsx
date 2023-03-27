import { NoticesSearch } from 'components/Notices/NoticesSearch';
import { NoticesTitle } from 'components/Notices/NoticesTitle';
import { NoticesNavigation } from 'components/Notices/NoticesNavigation';
import { NoticesCategoriesList } from 'components/Notices/NoticesCategoriesList';
import getNotices from './getNotices';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUserAccessToken } from 'redux/selectors';
import axios from 'axios';
import { deleteNotice } from 'components/Notices/api';

export const NoticesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const userToken = useSelector(selectUserAccessToken);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('sell');
  const [notices, setNotices] = useState([]);

  const fetchNotices = async (category, query) => {
    try {
      if (userToken)
        axios.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
      else axios.defaults.headers.common['Authorization'] = null;

      const noticesArray = await getNotices(category, query);
      setNotices(noticesArray);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchNotices(category, search);
  }, [category]);

  const updateQueryString = e => {
    setSearchParams({ query: e.target.value.toLocaleLowerCase().trim() });
    setSearch(e.target.value.toLocaleLowerCase());
  };
  console.log(searchParams.get('name'));

  const handleSubmit = evt => {
    evt.preventDefault();
    fetchNotices(category, search);
  };

  const handleClick = category => {
    setCategory(category);
  };

  const clearSearch = () => {
    setSearch('');
  };

  const handleDelete = async id => {
    await deleteNotice(id);
    setNotices(state => state.filter(notice => notice._id !== id));
  };
  return (
    <div>
      <NoticesTitle />
      <NoticesSearch
        value={search}
        onChange={updateQueryString}
        onSubmit={handleSubmit}
        removeQuery={clearSearch}
      />
      <NoticesNavigation onCategoryClick={handleClick} />
      <NoticesCategoriesList notices={notices} onDeleteNotice={handleDelete} />
    </div>
  );
};

export default NoticesPage;
