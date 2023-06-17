
import BuscarCepPage from "./PageObject/BuscarCepPage"

describe('Busca de CEP', () => {
  beforeEach(() => {
    BuscarCepPage.visit()
  })

  it('Realizar a busca com o valor "69005-040"', () => {
    const cep = '69005-040'

    BuscarCepPage.preencherCampoCep(cep)
    BuscarCepPage.clicarBotaoBuscar()

    BuscarCepPage.verificarResultadoDaBusca().should('have.length', 1)
  })

  it('Realizar a busca com o valor "Lojas Bemol"', () => {
    const valorBusca = 'Lojas Bemol'

    BuscarCepPage.preencherCampoCep(valorBusca)
    BuscarCepPage.clicarBotaoBuscar()

    BuscarCepPage.verificarResultadoDaBusca().should('have.length', 1)
  })
})