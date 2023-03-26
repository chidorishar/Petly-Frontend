import {
  Form,
  Input,
  IconHiSearch,
  IconHiOutlineXCircle,
  Button,
} from './NoticesSearch.styled';
import PropTypes from 'prop-types';

export const NoticesSearch = ({ onChange, onSubmit }) => {
  let search = false;
  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="Search"
        name="name"
        // value={value}
        onChange={onChange}
      />
      <Button type="onSubmit">
        {search && <IconHiSearch />}
        {!search && <IconHiOutlineXCircle width={20} />}
      </Button>
    </Form>
  );
};

NoticesSearch.propTypes = {
  // value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
