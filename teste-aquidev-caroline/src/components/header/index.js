import { HeaderStyled } from "./styled";
import { Button } from '@chakra-ui/react';

export const Header = () => {
  return(

    <HeaderStyled>
        <Button variant="header">Cervejaria</Button>
        <Button variant="header">Login</Button>
    </HeaderStyled>
)
}