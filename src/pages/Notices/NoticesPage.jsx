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

import { Container, Modal, Section } from 'components/common';
import { AddNoticeForm, ModalNotice } from 'components';
import { useAuth } from 'redux/hooks/getAuth';

const unAuthCategories = ['sell', 'lostFound', 'forFree'];

export const NoticesPage = () => {
  const { isUserAuthorized } = useAuth();
  const { t } = useTranslation();

  const [searchParams, setSearchParams] = useSearchParams();
  const userToken = useSelector(selectUserAccessToken);

  const [search, setSearch] = useState(searchParams.get('query') ?? '');
  const [category, setCategory] = useState(
    searchParams.get('category') ?? 'sell'
  );
  const [notices, setNotices] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddNoticeModalOpen, setIsAddNoticeModalOpen] = useState(false);
  const [noticeDetailedInfo, setNoticeDetailedInfo] = useState({});

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
    if (!unAuthCategories.includes(category) && !isUserAuthorized) {
      // toast.error('You need to be logged in to see this category');
      // return;
    }
    // setCategory('sell');
  }, []);

  useEffect(() => {
    searchParams.set('category', category);
    setSearchParams(searchParams);

    fetchNotices(category, search);
  }, [category]);

  const updateQueryString = e => {
    searchParams.set('query', e.target.value.toLocaleLowerCase().trim());
    setSearchParams(searchParams);

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
        `${t('notification.networkError')} ${noticeDetailedInfoResp.status}`
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

  const handleAddNoticeModalClose = () => {
    setIsAddNoticeModalOpen(false);
  };

  const handleAddNoticeModalToggle = () => {
    if (!isUserAuthorized) {
      toast.error(t('notification.needLogged'));
      return;
    }

    setIsAddNoticeModalOpen(toggle => !toggle);
  };

  async function handleNoticeStatusUpdateInModal(id) {
    fetchNotices(category, search);

    const noticeDetails = await getNoticeDetailInfo(id);

    if (noticeDetails) {
      setNoticeDetailedInfo(noticeDetails);
    }
  }

  return (
    <Section>
      <Container>
        <NoticesTitle />
        <NoticesSearch
          value={search}
          onChange={updateQueryString}
          onSubmit={handleSubmit}
          removeQuery={clearSearch}
        />
        <NoticesNavigation
          onAddNoticeClick={handleAddNoticeModalToggle}
          onCategoryClick={handleClick}
          startCategory={category}
        />
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
        <Modal
          isOpen={isAddNoticeModalOpen}
          handleClose={handleAddNoticeModalClose}
        >
          <AddNoticeForm handleClose={handleAddNoticeModalClose} />
        </Modal>
      </Container>
    </Section>
  );
};

export default NoticesPage;
