export class MobilePhoneReplenishment {

    checkDebitCard(cardNumber) {
        cy.get('[data-qa-node="card"]')
            .should('have.text', cardNumber)
    }

    checkDebitAmount(amount) {
        cy.get('[data-qa-node="amount"]')
            .should('contain.text', amount)
    }

    checkCommissionAmount(commissionAmount) {
        cy.get('[data-qa-node="commission"]')
            .should('contain.text', commissionAmount)
    }

    checkCommissionCurrency(commissionCurrency) {
        cy.get('[data-qa-node="commission-currency"')
            .should('contain.text', commissionCurrency)
    }
}

export const mobileReplenishment = new MobilePhoneReplenishment()
