class BuscarCepPage{
    visit() {
        cy.visit('http://www.buscacep.correios.com.br')
      }
    
      preencherCampoCep(cep) {
        cy.get('[id="endereco"]')
          .clear()
          .type(cep)
      }
    
      clicarBotaoBuscar() {
        cy.get('[id="btn_pesquisar"]')
          .click()
      }
    
      verificarResultadoDaBusca() {
        return cy.get('#resultado-DNEC > tbody > tr')
      }
}
export default new BuscarCepPage ()