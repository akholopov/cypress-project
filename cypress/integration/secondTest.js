import { mobileReplenishment } from "../support/pages/mobileReplenishment";
import { basePage } from "../support/pages/basePage";

   it("Replenishment of mobile phone number", () => {
      basePage.open('https://next.privat24.ua/mobile?lang=en')
      basePage.typePhoneNumber('686979712');
      basePage.typeAmount(10);
      basePage.typeDebitCardData('4552331448138217', '0524', '111');
      basePage.submitPayment();
      cy.wait(2000)
      mobileReplenishment.checkDebitCard('4552 **** **** 8217');
      mobileReplenishment.checkDebitAmount(10);
      mobileReplenishment.checkCommissionAmount(2);
      mobileReplenishment.checkCommissionCurrency('UAH');
   });

