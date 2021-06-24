import NumeroMultiplo from '../exercicios/ex1Multiplos/NumeroMultiplo';
import NumeroFeliz from '../exercicios/ex2NumeroFeliz/NumeroFeliz';

describe('Exercício 2 - Número Feliz', () => {
  it('soma do quadrado dos número', () => {
    const numeroEsperado: number = 97;

    const resultado: number = NumeroFeliz.somaDoQuadradoDosNumeros(49);

    expect(resultado).toBe(numeroEsperado);
  });

  it('não é número feliz', () => {
    const resultado: boolean = NumeroFeliz.checar(8);

    expect(resultado).toBe(false);
  });

  it('se o número é multiplo', () => {
    const resultado = NumeroMultiplo.checar(8, 2);

    expect(resultado).toBe(true);
  });

  it('se o número não é multiplo', () => {
    const resultado = NumeroMultiplo.checar(8, 3);

    expect(resultado).toBe(false);
  });

  it('se o número é primo', () => {
    const resultado = NumeroFeliz.checar(7);

    expect(resultado).toBe(true);
  });

  it('se o número não é primo', () => {
    const resultado = NumeroFeliz.checar(9);

    expect(resultado).toBe(false);
  });
});
