const soma = require('../../src/utils/soma');

describe('Exemplo de testes com o módulo soma', () => {
    it('deve somar 2 + 2 igual a 4', () => {
        expect(soma(2,2)).toBe(4);
    });

    it('deve somar 3 + 3 igual a 6', () => {
        expect(soma(3,3)).toBe(6);
    });
})