import Carrinho from "./Carrinho";
import ICorreios from "./ICorreios";
import Usuario from "./Usuario";

export default class ServicoCalculo {
  private correios: ICorreios;

  public constructor(correios: ICorreios) {
    this.correios = correios;
  }

  public calcular(carrinho: Carrinho): number {
    let resultado: number = carrinho.getValorTotal();

    if (resultado < 100) {
      const usuario: Usuario = carrinho.getUsuario();

      resultado += this.correios.valorFrete(usuario.getCep());
    }

    return parseFloat(resultado.toFixed(2));
  }
}
