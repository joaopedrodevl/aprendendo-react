import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Layout from "./components/Layout";
import { AppContextProvider } from "./components/AppContext";
import MainRoutes from "./routes";
import { createLocalStorage, getAllLocalStorage } from "./services/storage";

function App() {
  
  !getAllLocalStorage() && createLocalStorage();

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <Box minHeight={"100vh"} background={"#113AD9"}>
              <MainRoutes />
            </Box>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
