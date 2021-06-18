export default class Usuario {
  private nome: String;
  private cep: String;

  public constructor(nome: String, cep: String) {
    this.nome = nome;
    this.cep = cep;
  }

  public getNome(): String {
    return this.nome;
  }

  public setNome(nome: String): void {
    this.nome = nome;
  }

  public getCep(): String {
    return this.cep;
  }

  public setCep(cep: String): void {
    this.cep = cep;
  }
}
