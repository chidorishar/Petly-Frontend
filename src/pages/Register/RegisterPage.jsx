import { RegisterForm } from 'components';
import { AuthBox } from 'components/common/Box/AuthBox.styled';
import { Container } from 'components/common/shared.styled';

const RegisterPage = () => {
  return (
    <AuthBox>
      <Container>
        <RegisterForm />
      </Container>
    </AuthBox>
  );
};

export default RegisterPage;
