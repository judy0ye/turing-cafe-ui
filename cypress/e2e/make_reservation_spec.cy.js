describe('making a reservation', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 200,
      fixture: 'reservationMock'
    }).as('getData')
  });
  it('should make a add a new reservation after submitting', () => {
    cy.visit('http://localhost:3000/')
    cy.wait('@getData')
    cy.get('form').should('exist')
    .get('input[id="name"]').type('Ahsoka').should('have.value', 'Ahsoka')
    .get('input[id="date"]').type('09/11').should('have.value', '09/11')
    .get('input[id="time"]').type('10:11').should('have.value', '10:11')
    .get('input[id="number"]').type('5').should('have.value', '5')
    .get('button').click().url().should('eq', 'http://localhost:3000/')
    .get('.resy-container').find('.reservation').should('have.length', 3)
    .get('.resy-container').find('.reservation').last().contains('h2', 'Ahsoka')
  })
})