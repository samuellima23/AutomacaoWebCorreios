// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
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