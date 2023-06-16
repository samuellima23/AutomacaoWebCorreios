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



describe('Validar que a busca por CEP válido funciona corretamente', () => {
    beforeEach('Acessar a página principal dos correios',() => {
     cy.visit('http://www.buscacep.correios.com.br')
    })

    it('Realizar a busca com CEP válido', () => {
        cy.get('[id="endereco"]').type('69005-040');
        cy.get('[id="btn_pesquisar"]').click();
      })

    it('Realizar a busca com nome de loja válida', () => {
        cy.get('[id="endereco"]').type('Lojas Bemol');
        cy.get('[id="btn_pesquisar"]').click();
      })
})
