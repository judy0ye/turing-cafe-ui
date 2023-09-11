describe('landing page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 200,
      fixture: 'originalData'
    }).as('getData')
  });

  it('should have a header', () => {
    cy.visit('http://localhost:3000/')
    cy.wait('@getData')
    cy.get('h1').should('exist')
    .get('h1').contains('Turing Cafe Reservations')
  });

  it('should have a form', () => {
    cy.visit('http://localhost:3000/')
    cy.wait('@getData')
    cy.get('form').should('exist')
    .get('label[for="name"]').should('exist')
    .get('input[id="name"]').should('exist')
    .get('label[for="date"]').should('exist')
    .get('input[id="date"]').should('exist')
    .get('label[for="time"]').should('exist')
    .get('input[id="time"]').should('exist')
    .get('label[for="number"]').should('exist')
    .get('input[id="number"]').should('exist')
  });

  it('should have reservations on display', () => {
    cy.visit('http://localhost:3000/')
    cy.wait('@getData')
    cy.get('.resy-container').should('exist')
    .get('.resy-container').find('.reservation').should('have.length', 9)
    .get('.reservation').first().contains('h2', 'Christie')
    .get('.reservation').first().contains('p', '12/29')
    .get('.reservation').first().contains('p', '7:00 pm')
    .get('.reservation').first().contains('p', 'Number of Guests: 12')
    .get('.reservation').last().contains('h2', 'Brittany')
    .get('.reservation').last().contains('p', '9/9')
    .get('.reservation').last().contains('p', '7:30 pm')
    .get('.reservation').last().contains('p', 'Number of Guests: 3')
  });
})