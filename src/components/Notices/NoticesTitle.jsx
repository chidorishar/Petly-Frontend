import { Title } from './NoticesTitle.styled';
import { useTranslation } from 'react-i18next';

export function NoticesTitle() {
  const { t } = useTranslation();
  return <Title>{t('notices.header')}</Title>;
}
