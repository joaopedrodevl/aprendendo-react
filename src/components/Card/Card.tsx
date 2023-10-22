import {
  Input,
  Center,
  FormControl,
  FormLabel,
  Heading,
} from "@chakra-ui/react";
import { Button } from "../Button/index";
import { login } from "../../services/login";

export default function Card() {
  return (
    <Center padding={"25px"}>
      <FormControl
        backgroundColor={"#f4f4f4"}
        borderRadius={"25px"}
        padding={"25px"}
        maxWidth={"500px"}
      >
        <Center>
          <Heading color={"black"} fontSize={"30px"} paddingBottom={"20px"}>
            Faça login
          </Heading>
        </Center>

        <form action=".">
          <FormLabel color={"black"}>Email</FormLabel>
          <Input type="email" placeholder="Email" />
          <FormLabel color={"black"} paddingTop={"15px"}>
            Senha
          </FormLabel>
          <Input type="password" placeholder="Senha" />
          <Center>
            <Button onClickF={login}>Login</Button>
          </Center>
        </form>
      </FormControl>
    </Center>
  );
}
