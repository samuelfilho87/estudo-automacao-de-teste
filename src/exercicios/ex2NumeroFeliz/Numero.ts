export default class Numero {
  static somaDoQuadradoDosNumeros(numero: number): number {
    const numeros: String[] = String(numero).split("");

    let soma: number = 0;

    for (let i = 0; i < numeros.length; i++) {
      let numero: number = +numeros[i];

      soma += numero * numero;
    }

    return soma;
  }

  static ehNumeroFeliz(numero: number): boolean {
    const resultados: number[] = [];
    let ultimoNumero: number = numero;

    resultados.push(numero);

    do {
      ultimoNumero = this.somaDoQuadradoDosNumeros(ultimoNumero);

      if (resultados.includes(ultimoNumero)) {
        return false;
      }

      resultados.push(ultimoNumero);
    } while (!(ultimoNumero == 1));

    return true;
  }

  static ehPrimo(numero: number): boolean {
    let contador: number = 0;

    if (numero < 2) return false;
    if (numero % 2 == 0) return false;

    for (let i = 3; i <= numero; i++) {
      if (numero % i == 0) {
        contador++;

        if (contador > 1) return false;
      }
    }

    return true;
  }

  static ehMultiplo(numero: number, multiplicador: number): boolean {
    return numero % multiplicador == 0;
  }
}
