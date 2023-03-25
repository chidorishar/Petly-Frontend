import { LoginForm } from 'components/LoginForm/LoginForm';
import { AuthBox } from 'components/common/Box/AuthBox.styled';
import { Container } from 'components/common';

const LoginPage = () => {
  return (
    <AuthBox>
      <Container>
        <LoginForm />
      </Container>
    </AuthBox>
  );
};

export default LoginPage;
