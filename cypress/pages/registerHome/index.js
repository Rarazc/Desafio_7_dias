import {registerHomeElements} from "./elements"

class RegisterHome {
  clickOptionsMenu(){
    cy.xpath(registerHomeElements.optionButtonXpath)
      .should('be.visible')
      .click()
  }
  alterarOption(){
    cy.contains('Alterar')
      .should('be.visible')
      .click()
  }
  excluirOption(){
    cy.contains('Excluir')
      .should('be.visible')
      .click()
  }
}

export default new RegisterHome();