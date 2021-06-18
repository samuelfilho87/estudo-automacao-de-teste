import Item from "./Item";
import Produto from "./Produto";
import Usuario from "./Usuario";

export default class Carrinho {
  private usuario: Usuario;
  private itens: Item[];

  public constructor(usuario: Usuario) {
    this.usuario = usuario;
    this.itens = [];
  }

  public getUsuario(): Usuario {
    return this.usuario;
  }

  public setUsuario(usuario: Usuario): void {
    this.usuario = usuario;
  }

  public getValorTotal(): number {
    let soma: number = 0;

    this.itens.forEach(item => {
      soma += item.getProduto().getValor() * item.getQuantidade();
    });

    return parseFloat(soma.toFixed(2));
  }

  public getItens(): Item[] {
    return this.itens;
  }

  public setItens(itens: Item[]): void {
    this.itens = itens;
  }

  public removeItem(produto: Produto): boolean {
    this.itens = this.itens.filter(item =>
      item.getProduto().getNome() !== produto.getNome()
    );

    return true;
  }

  public addProduto(produto: Produto): boolean {
    for (let i = 0; i < this.itens.length; i++) {
      if (this.itens[i].getProduto().getNome() === produto.getNome()) {
        this.itens[i].addQuantidade();

        return true;
      }
    }

    this.itens.push(new Item(produto, 1));

    return true;
  }

  public addProdutos(produtos: Produto[]): boolean {
    for (let i = 0; i < produtos.length; i++) {
      this.addProduto(produtos[i]);
    }

    return true;
  }

  public removeProduto(produto: Produto): boolean {
    this.itens.forEach(item => {
      if (item.getProduto().getNome() === produto.getNome()) {
        item.removeQuantidade();

        return true;
      }
    })

    return true;
  }
}