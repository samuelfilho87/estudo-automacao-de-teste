import Produto from "./Produto";

export default class Item {
  private produto: Produto;
  private quantidade: number;

  public constructor(produto: Produto, quantidade: number) {
    this.produto = produto;
    this.quantidade = quantidade;
  }

  public getProduto(): Produto {
    return this.produto;
  }

  public setProduto(produto: Produto): void {
    this.produto = produto;
  }

  public getQuantidade(): number {
    return this.quantidade;
  }

  public setQuantidade(quantidade: number): void {
    this.quantidade = quantidade;
  }

  public addQuantidade(): void {
    this.quantidade++;
  }

  public removeQuantidade(): void {
    if (this.quantidade > 1) this.quantidade--;
  }
}
