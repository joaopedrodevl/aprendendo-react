import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import CardInfo from "../components/CardInfo";
import { useContext, useEffect, useState } from "react";
import { api } from "../api/api";
import { AppContext } from "../components/AppContext";

interface IUserData {
  email: string;
  senha: string;
  nome: string;
  balance: number;
  id: number;
}

const Conta = () => {
  const [userData, setUserData] = useState<null | IUserData>();
  const { id } = useParams();
  const navigate = useNavigate();

  const context = useContext(AppContext);
  const { isLogged } = context;

  useEffect(() => {
    if (!isLogged) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    const getData = async () => {
      const data: any | IUserData = await api;
      setUserData(data);
    };
    getData();
  }, []);

  const data = new Date();
  const diaFormatado =
    data.getDate() < 10 ? `0${data.getDate()}` : data.getDate();
  const mesFormatado =
    data.getMonth() < 10 ? `0${data.getMonth() + 1}` : data.getMonth() + 1;
  const horaFormatada =
    data.getHours() < 10 ? `0${data.getHours()}` : data.getHours();
  const minutoFormatado =
    data.getMinutes() < 10 ? `0${data.getMinutes()}` : data.getMinutes();
  const dataFormatada = `${diaFormatado}/${mesFormatado}/${data.getFullYear()} às ${horaFormatada}:${minutoFormatado}h`;

  useEffect(() => {
    if (userData && id !== userData.id.toString()) {
      return navigate("/conta/" + userData.id);
    }
  }, []);

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        {userData?.nome ? (
          <>
            <CardInfo
              mainContent={`Bem vind@ ${userData.nome}`}
              content={dataFormatada}
            />
            <CardInfo
              mainContent={"Saldo"}
              content={`R$ ${userData.balance.toFixed(2)}`}
            />
          </>
        ) : (
          <Spinner size={"xl"} color="white" />
        )}
      </SimpleGrid>
    </Center>
  );
};

export default Conta;
