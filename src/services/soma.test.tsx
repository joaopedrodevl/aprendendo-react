import { soma } from './soma';

describe('Soma', () => {
    it('Deve somar 1 ao valor 1 e retornar 2', () => {
        const resultado = soma(1, 1);
        expect(resultado).toEqual(2);
    })
})