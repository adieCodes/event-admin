describe('Home page', () => {
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

  it('Renders event', () => {
    cy.visit(Cypress.env('baseUrl'));

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

  it('Can return home via nav', () => {
    cy.contains(/Add Event/i).click();
    cy.url().should('contain', '/add');

    cy.contains(/EventList/i).click();
    cy.url().should('not.contain', '/add');
  });

  it('Filters using All/Prev/Future buttons', () => {
    cy.contains(/Previous/i).click();

    cy.get('.event-title').should('have.length', 1);
    cy.get('.event-title').should('contain', 'Ukraine v England');

    cy.contains(/Future/i).click();

    cy.get('.event-title').should('have.length', 1);
    cy.get('.event-title').should('contain', 'Black Widow');

    cy.contains(/All Events/i).click();

    cy.get('.event-title').should('have.length', 2);
    cy.get('.event-title').each((title, i) => {
      const content = title.contents();

      expect(content[0].textContent).equal(defaultEvents[i].title);
    });
  });
});
