/// <reference types="cypress" />

const donationPage = require('../pageObjects/donation.page');

describe('Donation flow', () => {
  it('Make Donation', () => {
    cy.fixture('data').then(data => {

      cy.visit(data.donation_page)

      cy.get(donationPage.elements.blocks.amountTile).click();


    })
  })
})