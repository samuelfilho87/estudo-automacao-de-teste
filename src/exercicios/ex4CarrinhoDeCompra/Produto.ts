export default class Produto {
  private nome: String;
  private valor: number;

  public constructor(nome: String, valor: number) {
    this.nome = nome;
    this.valor = valor;
  }

  public getNome(): String {
    return this.nome;
  }

  public getValor(): number {
    return this.valor;
  }
}
