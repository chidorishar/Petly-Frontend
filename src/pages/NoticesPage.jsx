import { NoticesSearch } from 'components/Notices/NoticesSearch';
import { NoticesTitle } from 'components/Notices/NoticesTitle';
import { NoticesNavigation } from 'components/Notices/NoticesNavigation';
import { NoticesCategoriesList } from 'components/Notices/NoticesCategoriesList';

export const NoticesPage = () => {
  return (
    <div>
      <NoticesTitle />
      <NoticesSearch />
      <NoticesNavigation />
      <NoticesCategoriesList />
    </div>
  );
};
