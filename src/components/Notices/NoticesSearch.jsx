import {
  Form,
  Input,
  IconHiSearch,
  IconHiOutlineXCircle,
  Button,
} from './NoticesSearch.styled';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

export const NoticesSearch = ({ value, onChange, onSubmit, removeQuery }) => {
  const { t } = useTranslation();
  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder={t('news.search')}
        name="name"
        value={value}
        onChange={onChange}
      />
      <Button type="onSubmit">
        {value && <IconHiOutlineXCircle width={20} onClick={removeQuery} />}
        {!value && <IconHiSearch />}
      </Button>
    </Form>
  );
};

NoticesSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  removeQuery: PropTypes.func,
};
