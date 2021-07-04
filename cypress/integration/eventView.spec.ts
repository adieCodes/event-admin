describe('Event View', () => {
  it('Renders', () => {
    cy.visit(Cypress.env('baseUrl'));

    cy.contains('Black Widow').click();
    cy.url().should('match', /\/event\/.+$/i);

    cy.get('.event-title').should('contain', 'Black Widow');
    cy.get('.event-date').should('contain', '2021-07-21');
    cy.get('.event-type').should('contain', '🎥');
  });
});
