describe('Add Event', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'));

    cy.contains(/Add Event/i).click();
    cy.url().should('contain', 'add');
  });

  it('Allows creation of new event', () => {
    const eventName = 'Test Event';
    const eventDate = '2021-12-25';

    cy.contains(/Create Event/i).should('be.disabled');

    cy.contains(/Event Name/i)
      .click()
      .type(eventName);
    cy.get('#event-name').should('have.value', eventName);

    cy.contains(/Create Event/i).should('be.disabled');

    cy.contains(/Event Date/i)
      .click()
      .type(eventDate);
    cy.get('#event-date').should('have.value', eventDate);

    cy.contains(/Create Event/i).should('be.disabled');

    cy.get('#event-types').select('football').should('have.value', 'football');

    cy.contains(/Create Event/i).should('not.be.disabled');

    cy.contains(/Create Event/i).click();

    cy.url().should('not.contain', 'add');

    cy.contains(eventName).should('exist');
  });

  it('Can cancel out of form', () => {
    cy.contains(/Cancel/i).click();

    cy.url().should('not.contain', 'add');
  });
});
