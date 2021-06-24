import Multiplos from '../exercicios/ex1Multiplos/Multiplos';

let multiplos: Multiplos;

describe('Exercício 1 - Multiplos', () => {
  it('pegar multiplos de 3 menor que 15', () => {
    multiplos = new Multiplos();

    const multiplosEsperados = [3, 6, 9, 12];

    const multiplosDe3 = multiplos.pegarMultiplos(3, 15);

    expect(multiplosDe3).toEqual(multiplosEsperados);
  });

  it('remover multiplos repetidos', () => {
    multiplos = new Multiplos();

    const multiplosEsperados = [3, 6, 9, 12, 15];

    const multiplosRepetidos = [3, 3, 6, 9, 12, 15, 15];

    const resultado = multiplos.removerMultiplosRepetidos(multiplosRepetidos);

    expect(resultado).toEqual(multiplosEsperados);
  });

  it('somar multiplos de 3 ou 5 menor que 16', () => {
    multiplos = new Multiplos();

    const multiplosDe3 = multiplos.pegarMultiplos(3, 16);
    const multiplosDe5 = multiplos.pegarMultiplos(5, 16);
    const multiplosDe3ou5 = multiplos.unirMultiplos(multiplosDe3, multiplosDe5);

    const resultado = multiplos.somarMultiplos(multiplosDe3ou5);

    expect(resultado).toEqual(60);
  });

  it('somar multiplos de 3 e 5 menor que 20', () => {
    multiplos = new Multiplos();

    const multiplosDe3 = multiplos.pegarMultiplos(3, 20);
    const multiplosDe5 = multiplos.pegarMultiplos(5, 20);
    const multiplosDe3e5 = multiplos.unirMultiplosEmComum(multiplosDe3, multiplosDe5);

    const resultado = multiplos.somarMultiplos(multiplosDe3e5);

    expect(resultado).toEqual(15);
  });

  it('somar multiplos de 3 ou 5 e 7 menor que 25', () => {
    multiplos = new Multiplos();

    const multiplosDe3 = multiplos.pegarMultiplos(3, 25);
    const multiplosDe5 = multiplos.pegarMultiplos(5, 25);
    const multiplosDe7 = multiplos.pegarMultiplos(7, 25);

    const multiplosDe3ou5 = multiplos.unirMultiplos(multiplosDe3, multiplosDe5);
    const multiplosDe3ou5e7 = multiplos.unirMultiplosEmComum(multiplosDe3ou5, multiplosDe7);

    const resultado = multiplos.somarMultiplos(multiplosDe3ou5e7);

    expect(resultado).toEqual(21);
  });
});
