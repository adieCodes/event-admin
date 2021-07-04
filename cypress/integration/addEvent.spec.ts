describe('Add Event', () => {
  it('Allows creation of new event', () => {
    const eventName = 'Test Event';
    const eventDate = '2021-12-25';

    cy.visit('http://localhost:3000');

    cy.contains(/Add Event/i).click();
    cy.url().should('contain', 'add');

    cy.contains(/Event Name/i)
      .click()
      .type(eventName);
    cy.get('#event-name').should('have.value', eventName);

    cy.contains(/Event Date/i)
      .click()
      .type(eventDate);
    cy.get('#event-date').should('have.value', eventDate);

    cy.get('#event-types').select('football').should('have.value', 'football');

    cy.contains(/Create Event/i).click();

    cy.url().should('not.contain', 'add');
  });

  // TODO: Test form can only be submitted when required fields are completed
});
