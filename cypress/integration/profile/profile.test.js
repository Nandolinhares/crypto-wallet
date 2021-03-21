import axios from 'axios'

describe('profile', () => {
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

      it('should return error when user types incporrect values on crypto card', () => {
          const negativeValue = -2
          cy.wait(2000)

          cy.get('#buy-sell-input')
            .type(negativeValue)
            
          cy.wait(2000)

          cy.get('#buttonSubmitBuy')
            .click()
            
          cy.get('#alert-dialog-title')
            .should('have.text', 'Você não pode inserir valores negativos')
        
          cy.wait(1000)              
          cy.get('.close-dialog')
          .click()
        })

      context('Buy Bitcoins', () => {
        it('should return bitcoins comprados com sucesso', () => {
            const value = 28000
            cy.wait(2000)

            cy.get('#buy-sell-input')
              .clear()
              .type(value)
              
            cy.wait(2000)

            cy.get('#buttonSubmitBuy')
              .click()
              
            cy.get('#alert-dialog-title')
              .should('have.text', '28000 reais em bitcoins comprados com sucesso!')
            
            cy.wait(2000)

            cy.get('.close-dialog')
            .click()  
          })
      })

      context('Sell Bitcoins', () => {
        it('should return bitcoins vendidos com sucesso', () => {
            const value = 400
            cy.wait(2000)

            cy.get('#select-sell-state')
              .click()

            cy.get('#buy-sell-input')
              .clear()
              .type(value)
              
            cy.wait(2000)

            cy.get('#buttonSubmitSell')
              .click()
              
            cy.get('#alert-dialog-title')
              .should('have.text', '400 reais em bitcoins vendidos com sucesso!')
            
            cy.wait(1000)

            cy.get('.close-dialog')
            .click()  
          })
      })

      context('Buy Britas', () => {
        it('should return britas compradas com sucesso', () => {
            const value = 400
            cy.wait(2000)

            cy.get('#radio-brita')
              .click()

            cy.get('#select-buy-state')
              .click()

            cy.get('#buy-sell-input')
              .clear()
              .type(value)
              
            cy.wait(2000)

            cy.get('#buttonSubmitBuy')
              .click()
              
            cy.get('#alert-dialog-title')
              .should('have.text', '400 reais em britas comprados com sucesso!')
            
            cy.wait(2000)

            cy.get('.close-dialog')
            .click()  
          })
      })

      context('Sell Britas', () => {
        it('should return britas vendidas com sucesso', () => {
            const value = 200
            cy.wait(2000)

            cy.get('#radio-brita')
              .click()

            cy.get('#select-sell-state')
              .click()

            cy.get('#buy-sell-input')
              .clear()
              .type(value)
              
            cy.wait(2000)

            cy.get('#buttonSubmitSell')
              .click()
              
            cy.get('#alert-dialog-title')
              .should('have.text', '200 reais em britas vendidos com sucesso!')
            
            cy.wait(2000)
              
            cy.get('.close-dialog')
            .click()  
          })
      })

      context('Change Bitcoins to Britas', () => {
        it('should return bitcoins trocadas com sucesso', () => {
            const value = 200
            cy.wait(2000)

            cy.get('#bitcoin-brita')
              .click()

            cy.get('#change-crypto-input')
              .clear()
              .type(value)
              
            cy.wait(2000)

            cy.get('#buttonChangeSubmit')
              .click()
              
            cy.get('#alert-dialog-title')
              .should('have.text', 'bitcoins trocadas com sucesso')
            
            cy.wait(2000)
              
            cy.get('.close-dialog')
            .click()  
          })
      })

      context('Change Bitcoins to Britas', () => {
        it('should return britas trocadas com sucesso', () => {
          const value = 200
          cy.wait(2000)

          cy.get('#brita-bitcoin')
            .click()

          cy.get('#change-crypto-input')
            .clear()
            .type(value)
            
          cy.wait(2000)

          cy.get('#buttonChangeSubmit')
            .click()
            
          cy.get('#alert-dialog-title')
            .should('have.text', 'britas trocadas com sucesso')
          
          cy.wait(2000)
            
          cy.get('.close-dialog')
          .click()  
        })
      })

      context('Visit statement', () => {
        it('should visit statement page', () => {
          cy.wait(2000)

          cy.get('#button-statement')
            .click()

          cy.url()
            .should('include', '/statement')  
        })
      })
})