describe('Confirm CRA and Cypress setup', () => {
    it('See default page', () => {
        cy.visit('http://localhost:3000');

        cy.get('.App-link').contains('Learn React')
    })
})