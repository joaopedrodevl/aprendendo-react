import { login } from "./login";


global.alert = jest.fn();

test("Testando login", () => {
    login();

    expect(global.alert).toHaveBeenCalledWith("Bem vindo!");
});