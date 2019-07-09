/// <reference types="Cypress" />



describe('Kayak travel site main page', () => {
    it('visit main page', () => {
        cy.visit('https://www.kayak.com/')
    })
})