import NavBar from "../pages/navbar/index";

describe('Funcionalidade do NavBar', () => {
  it('1. click no botão home page', () => {
    cy.visit('/')
    NavBar.clickHomePageButton();
    cy.contains('Em breve');
  })
  it('2. click no botão register', () => {
    cy.visit('/')
    NavBar.clickRegisterButton();
    cy.contains('Funcionário(s)');
  })
  it('3. click no botão node', () => {
    cy.visit('/')
    NavBar.clickNodeButton();
    cy.contains('Em breve');
  })
  it('4. click no botão notification', () => {
    cy.visit('/')
    NavBar.clickNotificationButton();
    cy.contains('Em breve');
  })
  it('5. click no botão history', () => {
    cy.visit('/')
    NavBar.clickHistoryButton();
    cy.contains('Em breve');
  })
  it('6. click no botão user', () => {
    cy.visit('/')
    NavBar.clickUserButton();
    cy.contains('Em breve');
  })
})