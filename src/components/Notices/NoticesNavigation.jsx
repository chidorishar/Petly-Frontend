// import { Wrapper, Input, Icon } from './NoticesSearch.styled';
// import { Link } from 'react-router-dom';
import { Wrapper, Button, Li } from './NoticesNavigation.styled';

export const NoticesNavigation = () => {
  return (
    <Wrapper>
      <Li>
        <Button>
          <span>sell</span>
        </Button>
      </Li>
      <Li>
        <Button>
          <span>lost/found</span>
        </Button>
      </Li>
      <Li>
        <Button>
          <span>in good hands</span>
        </Button>
      </Li>
    </Wrapper>
  );
};
