import "./App.css";
import Header from "./components/Header";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <ChakraProvider>
        <Box minHeight={"100vh"} background={"#113AD9"}>
          <Header />
          <Card/>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
