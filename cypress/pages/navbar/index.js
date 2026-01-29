import {navBarElements} from "./elements";

class NavBar {
  clickHomePageButton() {
    cy.xpath(navBarElements.homeButtonXpath).should('be.visible').click();
  }
  clickRegisterButton(){
    cy.xpath(navBarElements.registerButtonXpath).should('be.visible').click();
  }
  clickNodeButton(){
    cy.xpath(navBarElements.nodeButtonXpath).should('be.visible').click();
  }
  clickNotificationButton(){
    cy.xpath(navBarElements.notificationButtonXpath).should('be.visible').click();
  }
  clickHistoryButton(){
    cy.xpath(navBarElements.historyButtonXpath).should('be.visible').click();
  }
  clickUserButton(){
    cy.xpath(navBarElements.userButtonXpath).should('be.visible').click();
  }
}

export default new NavBar();
