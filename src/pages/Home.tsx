import { Center, FormControl, Heading, Input, FormLabel } from "@chakra-ui/react";
import { DButton } from "../components/DButton";
import { useContext, useState } from "react";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const {setIsLogged, isLogged} = useContext(AppContext);
  const navigate = useNavigate();

  const validateUser = async (email: string, senha: string) => {
    const loggedIn = await login(email, senha);

    if (!loggedIn){
      alert("Email ou senha incorretos");
      return;
    }

    setIsLogged(true);
    changeLocalStorage({login: true, email: loggedIn.email, id: loggedIn.id, nome: loggedIn.nome, balance: loggedIn.balance});
    return navigate(`/conta/1`);
  }

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
            Login
          </Heading>
        </Center>

        <form action=".">
          <FormLabel color={"black"}>Email</FormLabel>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormLabel color={"black"} paddingTop={"15px"}>
            Senha
          </FormLabel>
          <Input type="password" placeholder="Senha" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
          <Center>
            <DButton onClick={() => validateUser(email, senha)} />
          </Center>
        </form>
      </FormControl>
    </Center>
  ); 
};

export default Home;
