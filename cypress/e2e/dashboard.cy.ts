describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');
    cy.wait(1500);
    cy.get('.subheading-primary').should('exist');
    cy.get("#search-bar-input", { timeout: 25000 }).click({ multiple: true }).type('Paris');
    cy.get('.search-button').filter(':visible').click();
    cy.get('.subheading-primary', { timeout: 25000 }).contains('France').should('exist');
  })
})