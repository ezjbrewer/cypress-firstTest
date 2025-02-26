describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')

    cy.get('[id="utilities"]').should('exist').should('have.prop', 'tagName', 'DIV')
  })
})