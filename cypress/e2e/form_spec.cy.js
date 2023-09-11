describe('form', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 200,
    })
    cy.visit('http://localhost:3000/')
  });

  it('should be able to type in form and fill them with corresponding values', () => {
    cy.get('form').should('exist')
    .get('input[id="name"]').type('Grogu').should('have.value', 'Grogu')
    .get('input[id="date"]').type('09/11').should('have.value', '09/11')
    .get('input[id="time"]').type('10:06').should('have.value', '10:06')
    .get('input[id="number"]').type('2').should('have.value', '2')
  });
})