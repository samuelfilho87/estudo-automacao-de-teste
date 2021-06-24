export default class NumeroPrimo {
  static checar(numero: number): boolean {
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
}