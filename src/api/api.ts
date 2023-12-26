const conta = {
    email: "joao@dio.me",
    senha: "123456",
    nome: "João Pedro",
    balance: 2000.00,
    id: 1,
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta);
    }, 2000);
});