import {
  Form,
  Input,
  IconHiSearch,
  IconHiOutlineXCircle,
  Button,
} from './NoticesSearch.styled';
import PropTypes from 'prop-types';

export const NoticesSearch = ({ value, onChange, onSubmit, removeQuery }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="Search"
        name="name"
        value={value}
        onChange={onChange}
      />
      <Button type="onSubmit">
        {value && value !== '' && (
          <IconHiOutlineXCircle width={20} onClick={removeQuery} />
        )}
        {(!value || value === '') && <IconHiSearch />}
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
