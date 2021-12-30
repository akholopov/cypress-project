   beforeEach(() => {
      cy.viewport(1920, 1080);
   });

   it("Check Docs tab text.", () => {
      cy.visit('https://www.cypress.io/');
      cy.get('*[class^="styled__NavList"]').contains('DOCS', {matchCase: false});
   });

   it("Should", () => {
      cy.visit('https://next.privat24.ua/mobile?lang=en');
      cy.get('[data-qa-node="phone-number"]')
          .type(1234567)
          .should('have.value', '12 345 67')
          .and('be.visible')
   });

   it("Expect", () => {
      cy.visit('https://next.privat24.ua/mobile?lang=en');
      cy.get('[data-qa-node="phone-number"]')
          .type(1234567)
          .then(input => {
             expect(input).to.have.value('12 345 67')
          })
   });

   it("Check default currency for deposit", () => {
      cy.visit('https://next.privat24.ua/deposit/open?lang=en');
      cy.get('input[data-qa-value="UAH"]')
          .should('be.checked')
   });

   it("Check that Archive link is visible", () => {
      cy.visit('https://next.privat24.ua/deposit/open?lang=en');
      cy.contains('Мої депозити')
          .trigger('mouseover')
          .get('#archiveDeposits')
          .should('be.visible')
   });

   it("Check that Show cards button contains button attribute", () => {
      cy.visit('https://next.privat24.ua?lang=en');
      cy.contains('Show cards')
          .should('have.attr', 'type')
          .and('match', /button/)
   });

   it("Check page URL", () => {
      cy.visit('https://next.privat24.ua?lang=en');
      cy.url()
          .should('eq', 'https://next.privat24.ua/?lang=en')
   });
