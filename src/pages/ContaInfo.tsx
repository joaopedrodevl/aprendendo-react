import { Center, SimpleGrid, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import CardInfo from "../components/CardInfo";
import { AppContext } from "../components/AppContext";
import { useContext, useEffect } from "react";
import { getAllLocalStorage } from "../services/storage";

const ContaInfo = () => {
  const context = useContext(AppContext);
  const navigate = useNavigate();
  const { isLogged } = context;
  const dadosUsuario = JSON.parse(getAllLocalStorage() as string);
  
  useEffect(() => {
    if (!isLogged || !dadosUsuario.login) {
      return navigate("/");
    }
  }, []);

  return (
    <>
      <Link to={"/conta/1"}><Text color={"white"}>Página da conta</Text></Link>
      <Center>
      <SimpleGrid columns={1} spacing={8} paddingTop={16}>
        <CardInfo
          mainContent="Dados do Usuário"
          content={`Nome: ${dadosUsuario.nome}
          Email: ${dadosUsuario.email}
          Saldo: ${dadosUsuario.balance}
          id: ${dadosUsuario.id}`}
        />
      </SimpleGrid>
    </Center>
    </>
  );
};

export default ContaInfo;
