describe('Test', () => {
   it('Gets, types and asserts', () => {
       cy.visit('https://example.cypress.io');
       cy.pause();
       cy.contains('type').click();
       cy.url().should('include', '/commands/actions');
       cy.get('.action-email')
           .type('fake@email.com')
           .should('have.value', 'fake@email.com')
       // expect(true).to.equal(true);
   })
});