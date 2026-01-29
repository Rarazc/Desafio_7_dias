import Register_home from "../pages/registerHome/index";
import RegisterFormPage from "../pages/cadastro";

describe('Funções menu de opções',() => {
  it('1. Alterar um registro', () => {
    cy.visit('/')
    Register_home.clickOptionsMenu()
    Register_home.alterarOption()
  })
  it('2. Excluir um registro', () => {
    cy.visit('/')
    Register_home.clickOptionsMenu()
    Register_home.excluirOption()
  })
  it('3. Funcionalidade botão de registro', () => {
    RegisterFormPage.accessRegisterPage();
  })
})