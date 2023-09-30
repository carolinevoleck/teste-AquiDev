import { useForm } from '../../hooks';
import { LoginPageContainer, FormContainer } from './styled';
import { FormControl, FormLabel, Input, FormErrorMessage, FormHelperText, Button } from '@chakra-ui/react';

export const LoginPage = () => {

    const [form, onChangeInputs ] = useForm ({

        email:"",
        password:""
    });

    const onSubmit = (e) =>{
        e.preventDefault();
    }

    return(
        <LoginPageContainer>
            <FormContainer>
                <form onSubmit={onSubmit}>
                    <FormControl isInvalid={false}>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type='email'
                            value={form.email}
                            onChange={onChangeInputs}
                        />

                       {/*  {!isError?(
                            <FormHelperText>
                                Enter the ameil
                            </FormHelperText>
                        )} */}
                        

                    </FormControl>
                        <Button type='submit'>Enviar</Button>
                </form>
            </FormContainer>
        </LoginPageContainer>
    )   
}
