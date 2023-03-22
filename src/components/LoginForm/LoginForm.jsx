import { useLoginUserMutation } from 'redux/slices/usersAPISlice';
import { Notify } from 'notiflix';

import {
  Button,
  ContainerCardCommon,
  FormCommon,
  InputCommon,
  Link,
  Text,
  TextMessage,
  Title,
} from './LoginForm.styled';

export const LoginForm = () => {
  const [sendLoginRequest, { isLoading }] = useLoginUserMutation();
  const loginUser = async userCredentials => {
    try {
      const {
        user: { name: userName },
      } = await sendLoginRequest(userCredentials).unwrap();

      Notify.success(
        `You have been successfully login! Welcome ${userName} 🥳`,
        undefined,
        { position: 'left-top' }
      );
    } catch (err) {
      console.log(err);
      Notify.failure(`Login failed! Please try again.`);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    const {
      email: { value: email },
      password: { value: password },
    } = e.target.elements;
    const userCredentials = { email, password };

    loginUser(userCredentials);
  };

  return (
    <ContainerCardCommon>
      <Title>Login</Title>
      <FormCommon onSubmit={onSubmit}>
        <InputCommon
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="on"
          autoFocus
        ></InputCommon>
        <TextMessage>Enter a valid Email</TextMessage>
        <InputCommon
          type="password"
          name="password"
          placeholder="Password"
          minLength="5"
          maxLength="12"
        ></InputCommon>
        <TextMessage>Enter a valid Email</TextMessage>
        <Button type="submit" disabled={isLoading}>Login</Button>
      </FormCommon>
      <Text>
        Don&#39;t have an account?&nbsp;
        <Link to="/register">Register</Link>
      </Text>
    </ContainerCardCommon>
  );
};
