import {registerElements} from "./elements";
import {dropdownElements} from "./elements";
import {checkboxElements} from "./elements";

class RegisterFormPage {
  accessRegisterPage(){
    cy.visit('/');
    cy.contains('+ Adicionar Funcionário')
      .should('be.visible')
      .and('not.be.disabled')
      .click();
    cy.contains('Adicionar outra atividade');
  }

  selectInactive(status){
    const statusEsperado = status.toLowerCase() === 'ativo' ? 'true' : 'false';

    cy.get(registerElements.inputInactiveSelector)
      .then($switch => {
        const statusAtual = $switch.attr('aria-checked');

        if (statusAtual !== statusEsperado) {
          cy.wrap($switch).click();
        }
      })

    cy.get(registerElements.inputInactiveSelector)
      .should('have.attr', 'aria-checked', statusEsperado);
  }

  fillUserName(name) {
    cy.get(registerElements.inputNameSelector)
      .should('be.visible')
      .clear()
      .type(name);
  }

  fillUserCPF(cpf){
    cy.get(registerElements.inputCPFSelector)
      .should('be.visible')
      .clear()
      .type(cpf);
  }

  fillUserRG(rg){
    cy.get(registerElements.inputRGSelector)
      .should('be.visible')
      .clear()
      .type(rg);
  }

  selectUserGender(gender){
    cy.get(registerElements.inputGenderSelector)
      .filter(`[value="${gender}"]`)
      .check({force: true});
  }

  fillUserBirthDate(birthDate){
    cy.get(registerElements.inputBirthDateSelector)
      .should('be.visible')
      .type(birthDate);
  }

  selectCargo(cargo){
    cy.get(dropdownElements.clickDropdown)
      .should('be.visible')
      .contains('Cargo')
      .click();
    cy.contains(dropdownElements.opcoesDropdown, cargo)
      .click();
  }

  selectAtividade(atividade){
    cy.get(checkboxElements.clickCheckbox)
      .then($checkbox => {
        if ($checkbox.is(':checked')) {
          cy.wrap($checkbox).uncheck({ force: true });
        }
      });
    cy.contains('label', 'Selecione a atividade:')
      .parent()
      .find(dropdownElements.clickDropdown)
      .click();
    cy.contains(dropdownElements.opcoesDropdown, atividade)
      .click();
  }

  selectEPI(epi){
    cy.contains('label', 'Selecione o EPI:')
      .parent()
      .find(dropdownElements.clickDropdown)
      .click();
    cy.contains(dropdownElements.opcoesDropdown, epi)
      .click();
  }

  fillCANumber(ca){
    cy.get(registerElements.inputCANumberSelector)
      .should('be.visible')
      .clear()
      .type(ca);
  }

  newActivityButton(){
    cy.contains(registerElements.inputNewActivitySelector, 'Adicionar outra atividade')
      .should('be.visible')
      .and('not.be.disabled')
      .click();
    cy.contains('label', 'Selecione a atividade:')
      .should('have.length.greaterThan', 1);
  }

  clickSaveButton(){
    cy.get(registerElements.inputSaveButtonSelector)
      .should('be.visible')
      .click();
  }

  fullRegisterSteps(userRegisterData){
    this.accessRegisterPage();
    this.selectInactive(userRegisterData.inativeStatus);
    this.fillUserName(userRegisterData.nome);
    this.fillUserCPF(userRegisterData.cpf);
    this.fillUserRG(userRegisterData.rg);
    this.selectUserGender(userRegisterData.gender);
    this.fillUserBirthDate(userRegisterData.birthdate);
    this.selectCargo(userRegisterData.cargo);
    this.selectAtividade(userRegisterData.atividade);
    this.selectEPI(userRegisterData.epiType);
    this.fillCANumber(userRegisterData.epiCA);
  }

}

export default new RegisterFormPage();