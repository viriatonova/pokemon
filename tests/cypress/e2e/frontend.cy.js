beforeEach(() => {
    cy.visit('http://localhost:4200')
})
describe('Frontend testing', () => {
    it('Page elements', () => {
        cy.get('.input-text').should('be.visible')
        cy.get('button[class=btn-primary]').should('be.visible')
    })
    it('Submit success', () => {
        cy.get('.input-text').type('pikachu')
        cy.get('.btn-primary').click()
        cy.get('img[alt=pokemon-image]').should('be.visible')
    })
    it('Submit empty', () => {
        cy.get('.input-text').focus()
        cy.get('.btn-primary').click()
        cy.get('div[class=error] > div').contains(" Pokemon don't exist in database ")
    })
})