const homePage = require('../pageObjects/home.page');
const tnewLoginPage = require('../pageObjects/tnewLogin.page');
Cypress.config('pageLoadTimeout', 300000);

describe('Smoke testing', () => {

  it('Login/Logout as User with Active membership', () => {
    cy.fixture('data').then(data => {

      // Log in as user with active membership
      cy.visit(data.home_page)
      cy.get(homePage.elements.buttons.loginButton).click()
      cy.get(tnewLoginPage.elements.inputs.emailField).type(data.active_user)
      cy.get(tnewLoginPage.elements.inputs.passwordField).type(data.active_user_password)
      cy.get(tnewLoginPage.elements.buttons.singIn).click()

      // We should be redirected to https://www.mountvernon.org/ page
      cy.get(homePage.elements.blocks.userName).should('contain', 'Ekateri')
      cy.window().its(homePage.elements.blocks.userStatus).should('equal', 'member_active')

      // Log out
      cy.get(homePage.elements.blocks.userName).click()
      cy.get('div.item > a.link').contains('Logout').click()
      cy.url().should('include', '/account/logout')
    })
  })

  it('Login/Logout as user with expired membership', () => {
    cy.fixture('data').then(data => {

      // Log in as user with expired membership
      cy.visit(data.login_page)
      cy.get(tnewLoginPage.elements.inputs.emailField).type(data.expired_user)
      cy.get(tnewLoginPage.elements.inputs.passwordField).type(data.expired_user_password)
      cy.get(tnewLoginPage.elements.buttons.singIn).click()

      // Check User Role
      cy.window().its(homePage.elements.blocks.userStatus).should('equal', 'non_member')
      // Log out
      cy.get(homePage.elements.blocks.userName).click()
      cy.get('div.item > a.link').contains('Logout').click()
      cy.url().should('include', '/account/logout')
    })
  })

  it('Login/Logout as non member', () => {
    cy.fixture('data').then(data => {

      // Log in as user with expired membership
      cy.visit(data.login_page)
      cy.get(tnewLoginPage.elements.inputs.emailField).type(data.nonmember_user)
      cy.get(tnewLoginPage.elements.inputs.passwordField).type(data.nonmember_user_password)
      cy.get(tnewLoginPage.elements.buttons.singIn).click()

      // Check User Role
      cy.window().its(homePage.elements.blocks.userStatus).should('equal', 'non_member')
      // Log out
      cy.get(homePage.elements.blocks.userName).click()
      cy.get('div.item > a.link').contains('Logout').click()
      cy.url().should('include', '/account/logout')
    })
  })
})