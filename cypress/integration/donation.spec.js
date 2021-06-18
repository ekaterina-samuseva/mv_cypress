const donationPage = require('../pageObjects/donation.page');

Cypress.Commands.add("clickRecaptcha", () => {
  cy.window().then(win => {
    win.document
      .querySelector("iframe[src*='recaptcha']")
      .contentDocument.getElementById("recaptcha-token")
      .click();
  });
});

describe('Donation flow', () => {
  it('Make Donation', () => {
    cy.fixture('data').then(data => {

      cy.visit('/');
      cy.get('a')
        .contains('Donate')
        .click();

      cy.url().should('include', '/donate');
      // Verify you can see a Donation form
      cy.get('fieldset.tn-fieldset')
        .should('be.visible');

      //cy.get(donationPage.elements.blocks.amountTile).click();

      cy.clickRecaptcha();


    })
  })
})