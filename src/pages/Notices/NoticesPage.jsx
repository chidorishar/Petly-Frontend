import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';

import { selectUserAccessToken } from 'redux/selectors';
import { deleteNotice, getNoticeDetailedInfo } from 'components/Notices/api';
import getNotices from './getNotices';

import { NoticesSearch } from 'components/Notices/NoticesSearch';
import { NoticesTitle } from 'components/Notices/NoticesTitle';
import { NoticesNavigation } from 'components/Notices/NoticesNavigation';
import { NoticesCategoriesList } from 'components/Notices/NoticesCategoriesList';

import { Container, Modal } from 'components/common';
import { AddNoticeForm, ModalNotice } from 'components';

export const NoticesPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const userToken = useSelector(selectUserAccessToken);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('sell');
  const [notices, setNotices] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddNoticeModalOpen, setIsAddNoticeModalOpen] = useState(false);
  const [noticeDetailedInfo, setNoticeDetailedInfo] = useState({});

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

  const handleAddNoticeModalClose = () => {
    setIsAddNoticeModalOpen(false);
  };

  const handleAddNoticeModalToggle = () => {
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
      />
      <NoticesCategoriesList
        notices={notices}
        onDeleteNotice={handleDelete}
        onUpdateNoticeStatus={handleSubmit}
        onLearnMoreClick={handleLearnMoreClick}
      />
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
  );
};

export default NoticesPage;
