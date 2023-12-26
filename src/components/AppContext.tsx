import { createContext, useEffect, useState } from "react";
import { createLocalStorage, getAllLocalStorage } from "../services/storage";

interface IAppContext {
  user: string;
  isLogged: boolean;
  setIsLogged: (isLogged: boolean) => void;
}

export const AppContext = createContext({} as IAppContext);

const AppContextProvider = ({ children }: any) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const storage = getAllLocalStorage();

  useEffect(() => {
    if (storage) {
      const { login } = JSON.parse(storage);
      setIsLogged(login);
    }
  }, []);

  const user = "";

  return <AppContext.Provider value={{ user, isLogged, setIsLogged }}>{children}</AppContext.Provider>;
};

export {AppContextProvider};