import { NoticesSearch } from 'components/Notices/NoticesSearch';
import { NoticesTitle } from 'components/Notices/NoticesTitle';
import { NoticesNavigation } from 'components/Notices/NoticesNavigation';
import { NoticesCategoriesList } from 'components/Notices/NoticesCategoriesList';
import { PetsList } from 'components/Notices/PetsList';
import { getNotices } from 'fakeAPI';
import { useSearchParams } from 'react-router-dom';

export const NoticesPage = () => {
  const notices = getNotices();
  const [searchParams, setSearchParams] = useSearchParams();
  const noticeName = searchParams.get('name') ?? '';

  const visibleNotices = notices.filter(notice =>
    notice.name.toLowerCase().includes(noticeName.toLowerCase())
  );

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };
  return (
    <div>
      <NoticesTitle />
      <NoticesSearch value={noticeName} onChange={updateQueryString} />
      <NoticesNavigation />
      <NoticesCategoriesList notices={visibleNotices} />
      <PetsList />
    </div>
  );
};
