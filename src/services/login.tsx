import { api } from "../api/api";

export const login = async (email: string, senha: string): Promise<boolean | object> => {
  const data: any = await api;

  if (email !== data.email || senha !== data.senha) {
    return false;
  }

  return { email: data.email, id: data.id, nome: data.nome, balance: data.balance};
}