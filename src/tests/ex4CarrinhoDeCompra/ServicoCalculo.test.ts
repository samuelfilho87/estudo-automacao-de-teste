import ICorreios from '../../exercicios/ex4CarrinhoDeCompra/ICorreios';
import ServicoCalculo from '../../exercicios/ex4CarrinhoDeCompra/ServicoCalculo';
import Usuario from '../../exercicios/ex4CarrinhoDeCompra/Usuario';

const correioMock = jest.fn<ICorreios, []>(() => {
  return {
    valorFrete: (cep: String): number => 19.9,
  };
});

describe('Exercício 4 - Serviço de Calculo', () => {
  it('valor total do carrinho menor que 100.00', () => {
    const carrinhoMock = jest.fn().mockImplementation(() => {
      return {
        getValorTotal: (): number => 98.90,
        getUsuario: (): Usuario => new Usuario("Samuel", "88340158"),
      };
    });

    const calculo: ServicoCalculo = new ServicoCalculo(correioMock());

    const resultado: number = calculo.calcular(carrinhoMock());

    expect(resultado).toBe(118.80);
  });

  it('serviço dos correios chamado somente uma vez', () => {
    const carrinhoMock = jest.fn().mockImplementation(() => {
      return {
        getValorTotal: (): number => 98.90,
        getUsuario: (): Usuario => new Usuario("Samuel", "88340158"),
      };
    });

    const correioMockInstancia = correioMock();

    const chamouCorreios = jest.spyOn(correioMockInstancia, 'valorFrete');

    const calculo: ServicoCalculo = new ServicoCalculo(correioMockInstancia);

    calculo.calcular(carrinhoMock());

    expect(chamouCorreios).toHaveBeenCalledTimes(1);
  });

  it('valor total do carrinho maior que 100.00', () => {
    const carrinhoMock = jest.fn().mockImplementation(() => {
      return {
        getValorTotal: (): number => 158.90,
        getUsuario: (): Usuario => new Usuario("Samuel", "88340158"),
      };
    });

    const calculo: ServicoCalculo = new ServicoCalculo(correioMock());

    const resultado: number = calculo.calcular(carrinhoMock());

    expect(resultado).toBe(158.90);
  });

  it('serviço dos correios chamado nenhuma vez', () => {
    const carrinhoMock = jest.fn().mockImplementation(() => {
      return {
        getValorTotal: (): number => 158.90,
        getUsuario: (): Usuario => new Usuario("Samuel", "88340158"),
      };
    });

    const correioMockInstancia = correioMock();

    const chamouCorreios = jest.spyOn(correioMockInstancia, 'valorFrete');

    const calculo: ServicoCalculo = new ServicoCalculo(correioMockInstancia);

    calculo.calcular(carrinhoMock());

    expect(chamouCorreios).toHaveBeenCalledTimes(0);
  });
});
