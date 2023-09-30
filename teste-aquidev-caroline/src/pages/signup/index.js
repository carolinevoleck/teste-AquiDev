import React from 'react';
import { useForm } from '../../hooks';
import { useState } from 'react';
import { validateEmail } from '../../constants';
import { validatePassword} from '../../constants';
import { validateName } from '../../constants';
import { CenteredPageContainer as SignupPageContainer, FormContainer, EmailInput, PasswordInput, NameInput } from '../../components';
import { Button } from '@chakra-ui/react';
import logo from '../../assets/logo.jpeg';
import { Signup } from '../../constants';
import { goToFeedPage, goToFeedPage } from '../../routes';
import { useNavigate } from 'react-router-dom';



export const SignupPage = () => {

  const navigate = useNavigate();
  const [form, onChangeInputs, clearInputs] = useForm({
    email: '',
    password: '',
    name:''
  });

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);


  const onSubmit = async (e) => {
    e.preventDefault();
    setIsEmailValid(validateEmail(form.email));
    setIsPasswordValid(validatePassword(form.password));
    setIsNameValid(validateName(form.name));
  };

  try{
    response = isNameValid && isEmailValid && isPasswordValid && await Signup ({
     email: form.email,
     password: form.password,
     name: form.name
 
   });
   console.log(response);
 } catch(e){
   alert(e.response.data.message)
 }


  return (
    <SignupPageContainer>
      <FormContainer>
        <form onSubmit={onSubmit}>
            <img src={logo} alt='logo'/>
            <NameInput
            value={form.name}
            onChange={onChangeInputs}
            isValid={isNameValid}
            />
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

          <Button type="submit" variant="formMain">Cadastrar</Button>
        </form>
      </FormContainer>
    </SignupPageContainer>
  );
};
