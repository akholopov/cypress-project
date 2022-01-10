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

   it("type", () => {
      cy.visit('https://next.privat24.ua/mobile?lang=en')
          .get('[data-qa-node="phone-number"]')
          .type(11223344)
   });

   it("focus", () => {
      cy.visit('https://next.privat24.ua/mobile?lang=en')
          .get('[data-qa-node="amount"]')
          .focus()
   });

   it("blur", () => {
      cy.visit('https://next.privat24.ua/mobile?lang=en')
          .get('[data-qa-node="amount"]')
          .focus()
          .blur()
   });

   it("clear", () => {
      cy.visit('https://next.privat24.ua/mobile?lang=en')
          .get('[data-qa-node="phone-number"]')
          .type(11223344)
          .clear()
   });

   it("submit", () => {
      cy.visit('https://next.privat24.ua/mobile?lang=en')
          .get('form[method="post"]')
          .submit()
   });

   it("click", () => {
      cy.visit('https://next.privat24.ua/mobile?lang=en')
          .get('[data-qa-value="manual"]')
          .click()
   });

   it("right click", () => {
      cy.visit('https://example.cypress.io/commands/actions')
          .contains('Right click to edit')
          .rightclick()
   });

   it("double click", () => {
      cy.visit('https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/dblclick_event/_sample_.Examples.html')
          .contains('My Card')
          .dblclick()
   });

   it("check and scrollIntoView", () => {
      cy.visit('https://en.privatbank.ua/')
          .get('input#switch-input')
          .scrollIntoView()
          .check({force: true})
          .wait(2000)
          .uncheck({force: true})
   });

   it("scrollTo", () => {
      cy.visit('https://en.privatbank.ua/')
          .scrollTo(0, 500)
   });

   it("select", () => {
      cy.visit('https://www.globalsqa.com/demo-site/select-dropdown-menu/')
          .get('[rel-title="Select Country"] select')
          .select("RUS")
   });

   it("trigger", () => {
      cy.visit('https://next.privat24.ua/?lang=en')
          .contains('Services')
          .wait(2000)
          .trigger('mouseover')
   });
