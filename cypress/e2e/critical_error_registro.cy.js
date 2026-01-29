import RegisterFormPage from "../pages/cadastro/index";
import FakeDataGenerator from "../util/fake_data";

describe('Funcionalidade do Registro de Funcionário', () => {
  it('1. Mal funcionamento do botão de nova atividade', () => {
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
    RegisterFormPage.newActivityButton();
    //RegisterFormPage.clickSaveButton();
  })

})