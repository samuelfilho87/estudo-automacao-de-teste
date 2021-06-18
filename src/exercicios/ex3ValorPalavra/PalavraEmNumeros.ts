import Numero from '../ex2NumeroFeliz/Numero';

export default class PalavraEmNumeros {
  private palavra: String;

  private readonly MINUSCULAS: String[] = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ];

  private readonly MAIUSCULAS: String[] = [
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
      let index: number = this.MINUSCULAS.indexOf(letras[i]);

      soma += index + 1;

      if (index === -1) {
        index = this.MAIUSCULAS.indexOf(letras[i]);

        if (index > -1) {
          soma += index + 27;
        }
      }
    }

    return soma;
  }

  public palavraComValorPrimo(): boolean {
    return Numero.ehPrimo(this.pegarValor());
  }

  public palavraComValorFeliz(): boolean {
    return Numero.ehNumeroFeliz(this.pegarValor());
  }

  public palavraComValorMultiploDeN(multiplicador: number): boolean {
    return Numero.ehMultiplo(this.pegarValor(), multiplicador);
  }
}
