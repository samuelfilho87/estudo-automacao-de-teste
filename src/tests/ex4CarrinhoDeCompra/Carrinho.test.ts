import Carrinho from "../../exercicios/ex4CarrinhoDeCompra/Carrinho";
import Item from "../../exercicios/ex4CarrinhoDeCompra/Item";
import Produto from "../../exercicios/ex4CarrinhoDeCompra/Produto";
import Usuario from "../../exercicios/ex4CarrinhoDeCompra/Usuario";

let carrinho: Carrinho;
let produto1: Produto;
let produto2: Produto;

describe('Exercício 4 - Carrinho', () => {

  beforeEach(() => {
    carrinho = new Carrinho(new Usuario("Samuel", "88340158"));

    produto1 = new Produto("Celular", 2990.90);
    produto2 = new Produto("Notebook", 8990.90);
  });

  it('pegar itens do carrinho quando está vazio', () => {
    const resultado: number = carrinho.getItens().length;

    expect(resultado).toBe(0);
  });

  it('adicionar produto ao carrinho vazio', () => {
    carrinho.addProduto(produto1);

    const resultado: number = carrinho.getItens().length;

    expect(resultado).toBe(1);
  });

  it('adicionar vários produtos ao mesmo tempo', () => {
    const produtos: Produto[] = [];

    produtos.push(produto1);
    produtos.push(produto2);

    carrinho.addProdutos(produtos);

    const resultado: number = carrinho.getItens().length;

    expect(resultado).toBe(2);
  });

  it('adicionar produto repetido carrinho', () => {
    carrinho.addProduto(produto1);
    carrinho.addProduto(produto1);

    const resultado: number = carrinho.getItens().length;

    expect(resultado).toBe(1);
  });

  it('adicionar novo produto ao carrinho', () => {
    carrinho.addProduto(produto1);
    carrinho.addProduto(produto2);

    const resultado: number = carrinho.getItens().length;

    expect(resultado).toBe(2);
  });

  it('remover quantidade de produto do carrinho', () => {
    carrinho.addProduto(produto1);
    carrinho.addProduto(produto2);
    carrinho.addProduto(produto2);

    carrinho.removeProduto(produto2);

    const itens: Item[] = carrinho.getItens();
    const numeroDeItens: number = itens.length;
    const quantidadeProdutoItem2 = itens[1].getQuantidade();

    expect(numeroDeItens).toBe(2);
    expect(quantidadeProdutoItem2).toBe(1);
  });

  it('quantidade do produto no carrinho não pode ser zero', () => {
    carrinho.addProduto(produto1);
    carrinho.addProduto(produto2);
    carrinho.addProduto(produto2);

    carrinho.removeProduto(produto2);
    carrinho.removeProduto(produto2);

    const itens: Item[] = carrinho.getItens();
    const numeroDeItens: number = itens.length;
    const quantidadeProdutoItem2 = itens[1].getQuantidade();

    expect(numeroDeItens).toBe(2);
    expect(quantidadeProdutoItem2).toBe(1);
  });

  it('remover item do carrinho', () => {
    carrinho.addProduto(produto1);
    carrinho.addProduto(produto2);
    carrinho.addProduto(produto2);

    carrinho.removeItem(produto2);

    const resultado: number = carrinho.getItens().length;

    expect(resultado).toBe(1);
  });

  it('valor total do carrinho', () => {
    carrinho.addProduto(produto1);
    carrinho.addProduto(produto2);
    carrinho.addProduto(produto2);

    const resultado: number = carrinho.getValorTotal();

    expect(resultado).toBe(20972.7);
  });

  it('valor total do carrinho vazio', () => {
    const resultado: number = carrinho.getValorTotal();

    expect(resultado).toBe(0);
  });
});
