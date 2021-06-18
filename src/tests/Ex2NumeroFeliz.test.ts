import Numero from '../exercicios/ex2NumeroFeliz/Numero';

describe('Exercício 2 - Número Feliz', () => {
  it('soma do quadrado dos número', () => {
    const numeroEsperado: number = 97;

    const resultado: number = Numero.somaDoQuadradoDosNumeros(49);

    expect(resultado).toBe(numeroEsperado);
  });

  it('é número feliz', () => {
    const numeroEsperado: number = 97;

    const resultado: boolean = Numero.ehNumeroFeliz(7);

    expect(resultado).toBe(true);
  });

  it('não é número feliz', () => {
    const numeroEsperado: number = 97;

    const resultado: boolean = Numero.ehNumeroFeliz(8);

    expect(resultado).toBe(false);
  });

  it('se o número é multiplo', () => {
    const resultado = Numero.ehMultiplo(8, 2);

    expect(resultado).toBe(true);
  });

  it('se o número não é multiplo', () => {
    const resultado = Numero.ehMultiplo(8, 3);

    expect(resultado).toBe(false);
  });

  it('se o número é primo', () => {
    const resultado = Numero.ehPrimo(7);

    expect(resultado).toBe(true);
  });

  it('se o número não é primo', () => {
    const resultado = Numero.ehPrimo(9);

    expect(resultado).toBe(false);
  });
});
