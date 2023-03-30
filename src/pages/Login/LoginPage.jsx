import { LoginForm } from 'components/LoginForm/LoginForm';
import { AuthBox } from 'components/common/Box/AuthBox.styled';

import { FormContainer } from 'components/common/shared.styled';

const LoginPage = () => {
  return (
    <AuthBox>
      <FormContainer>
        <LoginForm />
      </FormContainer>
    </AuthBox>
  );
};

export default LoginPage;
