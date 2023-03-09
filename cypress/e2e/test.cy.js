/// <reference types="cypress" />

describe('template spec', () => {
  // beforeEach('Open website', () => {

  // })

  it('Submit form', () => {
    cy.visit('https://demoqa.com/')
    cy.get('.category-cards > :nth-child(2)').click()
    cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click()

    cy.get('#firstName').type('Pedro')
    cy.get('#lastName').type('Ciccone')
    cy.get('#userEmail').type('pedrocicc@gmail.com')
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click()
    cy.get('#userNumber').type('1234567890')
  })
})