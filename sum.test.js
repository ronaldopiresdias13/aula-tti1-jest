const funcoes = require('./sum');

test('adds 2 + 3 to equal 5', () => {
    expect(funcoes.soma(3, 2)).toBe(5);
});

test("Criar clone de objeto", () => {
    // expect(funcoes.cloneObj({nome: "Ronaldo Pires", idade: "24"})).toBe({nome: "Ronaldo Pires", idade: "24"})
    expect(funcoes.cloneObj({nome: "Ronaldo Pires", idade: "24"})).toEqual({nome: "Ronaldo Pires", idade: "24"})
});

test("Método MAP (1, 2, 3)", () => {
    expect(funcoes.array([1,4,9])).toEqual([1, 2, 3]);
});