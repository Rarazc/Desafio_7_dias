import RegisterFormPage from "../pages/cadastro/index";
import FakeDataGenerator from "../util/fake_data";
import {validateApiResponse} from "../util/api/validate_api_utils";

describe('Funcionalidade do Registro de Funcionário', () => {

  it('1. Registro completo de um funcionario com dados válidos', () => {
    cy.intercept('POST', '/employees').as('createEmployee');

    RegisterFormPage.fullRegisterSteps({
      inativeStatus: 'ativo',
      nome: FakeDataGenerator.generateMaleFullName(),
      cpf: FakeDataGenerator.generateCPF(),
      rg: FakeDataGenerator.generateRG(),
      gender: 'masculino',
      birthdate: FakeDataGenerator.generateBirthDate(),
      cargo: 'Cargo 02',
      atividade: 'Ativid 02',
      epiType: 'Protetor auditivo',
      epiCA: FakeDataGenerator.generateEpiCA()
    });
    RegisterFormPage.clickSaveButton();

    cy.wait('@createEmployee').then(({ response }) => {
      validateApiResponse(response, 201);

      expect(response.body).to.have.property('id');
      Cypress.env('lastUserId', response.body.id);
    });
  })

  it('2. Validação recuperação de dados do ultimo registro', () => {
    const userId = Cypress.env('lastUserId');

    cy.intercept('GET', '/employees').as('getEmployee');

    cy.visit('/');

    cy.wait('@getEmployee').then(({ response }) => {
      validateApiResponse(response, 200);

      const found = response.body.some(
        (item) => String(item.id) === String(userId)
      );

      expect(found,'Funcionário com id ${userId} encontrado no GET /employees')
        .to.eq(true);
    });
  })

})