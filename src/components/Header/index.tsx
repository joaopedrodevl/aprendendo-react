import { Link, useNavigate } from "react-router-dom";
import { Text, Button } from "@chakra-ui/react";
import Nav from "./styled";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { changeLocalStorage } from "../../services/storage";

export default function Header() {
  const { isLogged, setIsLogged } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    setIsLogged(false);

    changeLocalStorage({ login: false });
    return navigate(`/`);
  };

  return (
    <Nav>
      <h1>Dio Bank</h1>
      <ul>
        {!isLogged && (
          <li>
            <Link to={"/"}>
              <Text>Home</Text>
            </Link>
          </li>
        )}
        {isLogged && (
          <li>
            <Link to={"/conta/1"}>
              <Text>Conta</Text>
            </Link>
          </li>
        )}
        {isLogged && (
          <li>
            <Link to={"/infoconta"}>
              <Text>Info</Text>
            </Link>
          </li>
        )}
      </ul>
      {isLogged ? (
        <Button onClick={() => logout()}>Sair</Button>
      ) : (
        <Button>
          <Link to={"/"}>Entrar</Link>
        </Button>
      )}
    </Nav>
  );
}
