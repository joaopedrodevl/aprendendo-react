import { createLocalStorage, getAllLocalStorage } from "./storage";

describe('storage', () => {
    it('Deve retornar objeto no localStorage', () => {
        const getItem = jest.spyOn(Storage.prototype, 'getItem');
        getAllLocalStorage();
        expect(getItem).toHaveBeenCalled();
    });

    it("Deve criar um objeto no localStorage", () => {
        const setItem = jest.spyOn(Storage.prototype, 'setItem');
        createLocalStorage();
        expect(setItem).toHaveBeenCalled();
    });
});