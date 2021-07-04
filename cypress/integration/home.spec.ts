describe('Home page', () => {
  it('Renders event', () => {
    cy.visit(Cypress.env('baseUrl'));
    const defaultEvents = [
      {
        title: 'Ukraine v England',
        date: '2021-07-03',
        type: 'football',
      },
      {
        title: 'Black Widow',
        date: '2021-07-21',
        type: 'cinema',
      },
    ];

    cy.get('.event-title').should('have.length', 2);
    cy.get('.event-title').each((title, i) => {
      const content = title.contents();

      expect(content[0].textContent).equal(defaultEvents[i].title);
    });
    cy.get('.event-date').each((date, i) => {
      const content = date.contents();

      expect(content[0].textContent).equal(defaultEvents[i].date);
    });
    cy.get('.event-type').contains('⚽️');
  });
});
