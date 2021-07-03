describe('Home page', () => {
  it('Renders event', () => {
    cy.visit('http://localhost:3000');

    cy.get('.event-title').contains('Ukraine V England');
    cy.get('.event-time').contains('July 3');
    cy.get('.event-type').contains('⚽️');
  });
});
