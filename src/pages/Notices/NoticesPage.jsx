import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import { selectUserAccessToken } from 'redux/selectors';
import { deleteNotice, getNoticeDetailedInfo } from 'components/Notices/api';
import getNotices from './getNotices';

import { NoticesSearch } from 'components/Notices/NoticesSearch';
import { NoticesTitle } from 'components/Notices/NoticesTitle';
import { NoticesNavigation } from 'components/Notices/NoticesNavigation';
import { NoticesCategoriesList } from 'components/Notices/NoticesCategoriesList';
import { NotFound, NotFoundBox } from 'pages/News/NewsPage.styled';

import { Container, Section } from 'components/common';
import { ModalNotice } from 'components';

export const NoticesPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const userToken = useSelector(selectUserAccessToken);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('sell');
  const [notices, setNotices] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noticeDetailedInfo, setNoticeDetailedInfo] = useState({});

  const { t } = useTranslation();

  const fetchNotices = async (category, query) => {
    try {
      if (userToken)
        axios.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
      else axios.defaults.headers.common['Authorization'] = null;

      setIsRefreshing(true);
      const noticesArray = await getNotices(category, query);
      setNotices(noticesArray);
    } catch (error) {
      console.log(error.message);
    }
    setIsRefreshing(false);
  };

  useEffect(() => {
    fetchNotices(category, search);
  }, [category]);

  const updateQueryString = e => {
    setSearchParams({ query: e.target.value.toLocaleLowerCase().trim() });
    setSearch(e.target.value.toLocaleLowerCase());
  };

  const handleSubmit = evt => {
    evt?.preventDefault();
    fetchNotices(category, search);
  };

  async function getNoticeDetailInfo(id) {
    const noticeDetailedInfoResp = await getNoticeDetailedInfo(id);

    if (noticeDetailedInfoResp.status === 200) {
      return noticeDetailedInfoResp.data;
    } else {
      toast.error(
        `Something went wrong. Please try again later. Network error status ${noticeDetailedInfoResp.status}`
      );

      return null;
    }
  }

  const handleClick = category => {
    setCategory(category);
  };

  const clearSearch = () => {
    setSearch('');
  };

  const handleDelete = async id => {
    await deleteNotice(id);
    fetchNotices(category, search);
  };

  const handleLearnMoreClick = async id => {
    const noticeDetails = await getNoticeDetailInfo(id);

    if (noticeDetails) {
      setNoticeDetailedInfo(noticeDetails);
      setIsModalOpen(true);
    }
  };

  async function handleNoticeStatusUpdateInModal(id) {
    fetchNotices(category, search);

    const noticeDetails = await getNoticeDetailInfo(id);

    if (noticeDetails) {
      setNoticeDetailedInfo(noticeDetails);
    }
  }

  return (
    <Container>
      <Section>
        <NoticesTitle />
        <NoticesSearch
          value={search}
          onChange={updateQueryString}
          onSubmit={handleSubmit}
          removeQuery={clearSearch}
        />
        <NoticesNavigation onCategoryClick={handleClick} />
        <NoticesCategoriesList
          notices={notices}
          onDeleteNotice={handleDelete}
          onUpdateNoticeStatus={handleSubmit}
          onLearnMoreClick={handleLearnMoreClick}
        />
        {notices.length === 0 && !isRefreshing && (
          <NotFoundBox>
            <NotFound>{t('error.notfound')}</NotFound>
          </NotFoundBox>
        )}
        {isModalOpen && (
          <ModalNotice
            noticeData={noticeDetailedInfo}
            onUpdateNoticeStatus={handleNoticeStatusUpdateInModal}
            setIsModalShown={setIsModalOpen}
          />
        )}
      </Section>
    </Container>
  );
};

export default NoticesPage;
