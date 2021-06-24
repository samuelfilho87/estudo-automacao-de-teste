import NumeroMultiplo from './NumeroMultiplo';


export default class Multiplos {
  public removerMultiplosRepetidos(multiplos: number[]): number[] {
    const aux: number[] = Array.from(new Set(multiplos));

    return aux;
  }

  public pegarMultiplos(multiplicador: number, limite: number): number[] {
    const multiplos: number[] = [];

    for (let i = 1; i < limite; i++) {
      if (NumeroMultiplo.checar(i, multiplicador)) {
        multiplos.push(i);
      }
    }

    return multiplos;
  }

  public unirMultiplos(multiplos1: number[], multiplos2: number[]): number[] {

    let multiplos: number[] = [];

    multiplos.push(...multiplos1);
    multiplos.push(...multiplos2);

    multiplos = this.removerMultiplosRepetidos(multiplos);

    return multiplos;
  }

  public unirMultiplosEmComum(multiplos1: number[], multiplos2: number[]): number[] {

    let multiplosEmComum: number[] = multiplos1.filter(numero1 => multiplos2.includes(numero1));

    multiplosEmComum = this.removerMultiplosRepetidos(multiplosEmComum);

    return multiplosEmComum;
  }

  public somarMultiplos(multiplos: number[]): number {

    multiplos = this.removerMultiplosRepetidos(multiplos);

    let resultado: number = multiplos.reduce((acumulador: number, atual: number): number => {
      return acumulador + atual;
    }, 0);

    return resultado;
  }
}