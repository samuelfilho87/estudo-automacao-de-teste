//TODO chamar a classe de NumeroFeliz faça mas sentido talvez, com o método Checar, ai fica algo como numeroFeliz.Checar(num)
export default class NumeroFeliz {
  static somaDoQuadradoDosNumeros(numero: number): number {
    const numeros: String[] = String(numero).split("");

    let soma: number = 0;

    for (let i = 0; i < numeros.length; i++) {
      let numero: number = +numeros[i];

      soma += numero * numero;
    }

    return soma;
  }

  static checar(numero: number): boolean {
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
}
