import { LoginForm } from 'components/LoginForm/LoginForm';
import { AuthBox } from 'components/common/Box/AuthBox.styled';

const LoginPage = () => {
  return (
    <AuthBox>
      <LoginForm />
    </AuthBox>
  );
};

export default LoginPage;
