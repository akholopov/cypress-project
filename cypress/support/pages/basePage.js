export class BasePage {

    open(url) {
        cy.visit(url);
    }

    typePhoneNumber(phoneNumber) {
        cy.get('[data-qa-node="phone-number"]')
            .type(phoneNumber)
    }

    typeAmount(amount) {
        cy.get('[data-qa-node="amount"]')
            .type(amount)
    }

    typeDebitCardData(cardNumber, expiryDate, cvv) {
        cy.get('[data-qa-node="numberdebitSource"]')
            .type(cardNumber)
            .get('[data-qa-node="expiredebitSource"]')
            .type(expiryDate)
            .get('[data-qa-node="cvvdebitSource"]')
            .type(cvv)
    }

    submitPayment() {
        cy.get('[data-qa-node="submit"]')
            .click()
    }
}

export const basePage = new BasePage();
