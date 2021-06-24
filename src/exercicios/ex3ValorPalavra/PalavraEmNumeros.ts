import NumeroMultiplo from '../ex1Multiplos/NumeroMultiplo';
import NumeroFeliz from '../ex2NumeroFeliz/NumeroFeliz';
import NumeroPrimo from '../ex2NumeroFeliz/NumeroPrimo';

export default class PalavraEmNumeros {
  private palavra: String;

  //TODO não ficaria mais simples se fosse 1 array só de letras ao invés de separar por minuscula e maiuscula?
  private readonly LETRAS: String[] = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ];

  public constructor(palavra: String) {
    this.palavra = palavra.replace("[^a-zA-Z]", "");
  }

  public pegarValor(): number {
    const letras: String[] = this.palavra.split("");
    let soma: number = 0;

    for (let i = 0; i < letras.length; i++) {
      let index: number = this.LETRAS.indexOf(letras[i]);

      soma += index + 1;
    }

    return soma;
  }

  public palavraComValorPrimo(): boolean {
    return NumeroPrimo.checar(this.pegarValor());
  }

  public palavraComValorFeliz(): boolean {
    return NumeroFeliz.checar(this.pegarValor());
  }

  public palavraComValorMultiploDeN(multiplicador: number): boolean {
    return NumeroMultiplo.checar(this.pegarValor(), multiplicador);
  }
}
