import {faker} from '@faker-js/faker/locale/pt_BR';

class FakeDataGenerator {

  generateMaleFullName() {
    return faker.person.fullName({sex: 'male'})
  }

  generateFemaleFullName() {
    return faker.person.fullName({sex: 'female'})
  }

  generateCPF() {
    return faker.string.numeric(11);
  }

  generateRG() {
    return faker.string.numeric(9);
  }

  generateBirthDate() {
    return faker.date.birthdate({mode: 'age', min: 16, max: 65}).toISOString().split('T')[0];
  }

  generateEpiCA() {
    return faker.string.numeric(6);
  }
}

export default new FakeDataGenerator();
