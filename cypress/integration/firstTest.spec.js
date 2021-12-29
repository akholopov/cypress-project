// describe('Mobile phone replenishment', () => {
//     it('Show error: Minimum amount of the replenishment 1 UAH', () => {
//
//     });

    // it('By ID', () => {
    //     cy.visit('https://www.cypress.io/');
    //     cy.get('*[class*="PageSection"]').should();
    // })
// });

it('Using get with find and Eq ', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://next.privat24.ua/deposit/open');
    cy.get('tbody').find('td').find('div').find('button').eq(0);
})
