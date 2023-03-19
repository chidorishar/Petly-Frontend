import { Wrapper, Input, Icon, Button } from './NoticesSearch.styled';

export const NoticesSearch = () => {
  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Search"
        // value={value}
        // onChange={e => onChange(e.target.value)}
      />
      <Button>
        <Icon />
      </Button>
    </Wrapper>
  );
};
