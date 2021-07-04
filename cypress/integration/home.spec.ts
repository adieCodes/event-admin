describe('Home page', () => {
  it('Renders event', () => {
    cy.visit(Cypress.env('baseUrl'));

    cy.get('.event-title').contains('Ukraine V England');
    cy.get('.event-time').contains('July 3');
    cy.get('.event-type').contains('⚽️');
  });
});
