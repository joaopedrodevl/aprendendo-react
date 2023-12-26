import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Conta from "./pages/Conta";
import ContaInfo from "./pages/ContaInfo";
import { useContext } from "react";
import { AppContext } from "./components/AppContext";

const MainRoutes = () => {
    const { isLogged } = useContext(AppContext);

  return (
    <Routes>
      {!isLogged && <Route path="/" element={<Home/>} />}
      <Route path="/conta/:id" element={isLogged ? <Conta/> : <Home/>} />
      <Route path="/infoconta" element={<ContaInfo />} />
    </Routes>
  );
};

export default MainRoutes;
