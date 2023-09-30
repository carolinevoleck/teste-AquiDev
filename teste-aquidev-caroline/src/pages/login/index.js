import React from 'react';
import { useForm } from '../../hooks';
import { useState } from 'react';
import { validateEmail, validatePassword } from '../../constants';
import { CenteredPageContainer as LoginPageContainer, FormContainer, EmailInput, PasswordInput } from '../../components';
import { Button } from '@chakra-ui/react';
import logo from '../../assets/logo.jpeg';
import { useNavigate } from 'react-router-dom';
import { goToSignupPage, goToFeedPage } from '../../routes';
import { login } from '../../constants';

export const LoginPage = () => {
  const navigate = useNavigate();

  const [form, onChangeInputs, clearInputs] = useForm({
    email: '',
    password: '',
  });

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    setIsEmailValid(validateEmail(form.email));
    setIsPasswordValid(validatePassword(form.password));
    let response;
    try {
      response = isEmailValid && isPasswordValid && await login({
        email: form.email,
        password: form.password
      });
      console.log(response);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <LoginPageContainer>
      <FormContainer>
        <form onSubmit={onSubmit}>
          <img src={logo} alt='logo' />

          <EmailInput
            value={form.email}
            onChange={onChangeInputs}
            isValid={isEmailValid}
          />
          <PasswordInput
            value={form.password}
            onChange={onChangeInputs}
            isValid={isPasswordValid}
          />
          <Button type="submit" variant="formMain">Entrar</Button>
          <Button onClick={() => goToSignupPage(navigate)} type="button" variant="formSecondary">Não possui conta? Cadastrar</Button>
        </form>
      </FormContainer>
    </LoginPageContainer>
  );
};
