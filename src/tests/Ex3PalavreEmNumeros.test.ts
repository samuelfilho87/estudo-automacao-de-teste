import PalavraEmNumeros from '../exercicios/ex3ValorPalavra/PalavraEmNumeros';

describe('Exercício 3 - Palavra em números', () => {
  it('soma da palavra com letras minúsculas', () => {
    const palavra: PalavraEmNumeros = new PalavraEmNumeros("abc");

    const numeroEsperado: number = 6;

    const resultado: number = palavra.pegarValor();

    expect(resultado).toBe(numeroEsperado);
  });

  it('soma da palavra com letras maiúsculas', () => {
    const palavra: PalavraEmNumeros = new PalavraEmNumeros("aA");

    const numeroEsperado: number = 28;

    const resultado: number = palavra.pegarValor();

    expect(resultado).toBe(numeroEsperado);
  });

  it('soma da palavra com caracteres especiais', () => {
    const palavra: PalavraEmNumeros = new PalavraEmNumeros("a@b12C");

    const numeroEsperado: number = 32;

    const resultado: number = palavra.pegarValor();

    expect(resultado).toBe(numeroEsperado);
  });

  it('valor da palavra é primo', () => {
    const palavra: PalavraEmNumeros = new PalavraEmNumeros("a@b12B");

    const resultado: boolean = palavra.palavraComValorPrimo();

    expect(resultado).toBe(true);
  });

  it('valor da palavra não é primo', () => {
    const palavra: PalavraEmNumeros = new PalavraEmNumeros("a@b12C");

    const resultado: boolean = palavra.palavraComValorPrimo();

    expect(resultado).toBe(false);
  });

  it('valor da palavra é um número feliz', () => {
    const palavra: PalavraEmNumeros = new PalavraEmNumeros("abca");

    const resultado: boolean = palavra.palavraComValorFeliz();

    expect(resultado).toBe(true);
  });

  it('valor da palavra é multiplo de 3', () => {
    const palavra: PalavraEmNumeros = new PalavraEmNumeros("ab12Ca");

    const resultado: boolean = palavra.palavraComValorMultiploDeN(3);

    expect(resultado).toBe(true);
  });

  it('valor da palavra é multiplo de 5', () => {
    const palavra: PalavraEmNumeros = new PalavraEmNumeros("ab12Cc");

    const resultado: boolean = palavra.palavraComValorMultiploDeN(5);

    expect(resultado).toBe(true);
  });
});
