describe('Add Event', () => {
  it('Allows creation of new event', () => {
    cy.visit('http://localhost:3000');

    cy.contains(/Add Event/i).click();
    cy.url().should('contain', 'add');
  });
});
