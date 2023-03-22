import { Wrapper, Input, Icon, Button } from './NoticesSearch.styled';
import PropTypes from 'prop-types';

export const NoticesSearch = ({ value, onChange }) => {
  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Search"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <Button>
        <Icon />
      </Button>
    </Wrapper>
  );
};

NoticesSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
