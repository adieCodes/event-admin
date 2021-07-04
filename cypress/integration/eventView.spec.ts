describe('Event View', () => {
  it('Renders', () => {
    cy.visit(Cypress.env('baseUrl'));

    cy.contains('1234');
  });
});
