import { login } from "./login";

// const mockSetIsLogged = jest.fn();
// const mockNavigate = jest.fn();

// jest.mock('react', () => ({
//     ...jest.requireActual('react'),
//     useContext: () => ({
//         setIsLogged: mockSetIsLogged,
//     })
// }));

// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom') as any,
//     useNavigate: () => mockNavigate,
// }));

global.alert = jest.fn();

describe("Testando login", () => {
    it("Testando login com sucesso", async () => {
        const responde = await login("joao@dio.me", "123456");
        expect(responde).toBeTruthy();
    });
    it("Testando login com falha", async () => {
        const response = await login("email@inv.com", "123");
        expect(response).toBeFalsy();
    });
});