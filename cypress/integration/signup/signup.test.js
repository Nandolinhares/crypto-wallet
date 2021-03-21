import axios from 'axios'

describe('Signup Teste', () => {

  beforeEach(async () => {
    await axios.get('https://www.mercadobitcoin.net/api/BTC/ticker/') 
    await axios.get('https://economia.awesomeapi.com.br/all/USD-BRL')
  })

  it('should open signup page', () => {
      cy.visit('/')
      
      cy.wait(2000)
      
      cy.get('.buttonCadastrar')
        .click()
      
      cy.url()
        .should('include', '/signup')  
    })
    
    it('should return error message if click on button cadastrar withoud type on field', () => {
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

    it('should redirect to profile page if value is correct', () => {
        cy.get('#button-login-signup')
          .click()

        cy.url()
        .should('include', '/profile') 
      })
})
