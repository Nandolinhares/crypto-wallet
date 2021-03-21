import axios from 'axios'

describe('Login', () => {
  beforeEach(async () => {
    await axios.get('https://www.mercadobitcoin.net/api/BTC/ticker/') 
    await axios.get('https://economia.awesomeapi.com.br/all/USD-BRL')
  })
  it('should open login page', () => {
      cy.visit('/')

      cy.wait(2000)

      cy.get('.buttonLogin')
        .click()

      cy.url()
        .should('include', '/login')  
    })

  it('should return error message if click on button login withoud type on field', () => {
      cy.get('#button-login-signup')
        .click()
      cy.get('#custom-css-outlined-input')
        .should('have.attr', 'title', 'O campo não pode estar em branco')
    })

  it('should write correct value on input field', () => {
      cy.wait(2000)
      const username = 'Fernando'

      cy.get('#custom-css-outlined-input')
        .type(username)
        .should('have.value', username)
    })

  it('should return error because user doesnt exists', () => {
      cy.get('#button-login-signup')
        .click()

      cy.get('#custom-css-outlined-input')
      .should('have.attr', 'title', 'Usuário não encontrado')
    })

    it('should write correct value on input field', () => {
      cy.wait(2000)
      const username = 'teste'

      cy.get('#custom-css-outlined-input')
        .clear()
        .type(username)
        .should('have.value', username)
    })
})