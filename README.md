# Desafio 7 Dias

Repositório com o desafio proposto para praticar automação de testes com **Cypress** e organização de projeto.

Este projeto contém:
- Estrutura de testes automatizados com Cypress
- Configuração de ambiente de testes
- `.gitignore` apropriado (ignorando artefatos gerados)
- Scripts de execução dos testes

---

## 🔧 Tecnologias

Este projeto utiliza:
- JavaScript
- Cypress
- Node.js

---

## 🚀 Pré-requisitos

Antes de começar, você precisa ter instalado:

- Git
- Node.js (recomendado v16+)
- npm

---

## 📥 Passos para rodar

1. Clone o repositório:
   ```bash
   git clone https://github.com/Rarazc/Desafio_7_dias.git
2. Acesse a pasta:
   ```bash
   cd Desafio_7_dias
3. Instale dependências:
   ```bash
   npm install
   
## ▶️ Execução dos testes e Allure Report

1. 🧪 Executar os testes:
   ```bash
   npm run run:test

2. 📊 Gerar o relatório Allure:
   ```bash
   npm run allure:report

3. 🌐 Abrir o relatório no navegador:
   ```bash
   npm run allure:open


Este projeto utiliza **Cypress** com **Allure Report** para geração de relatórios de execução.

### 📦 Scripts disponíveis

```json
"scripts": {
  "run:test": "npx cypress run --env allure=true",
  "allure:report": "allure generate allure-results --clean -o allure-report",
  "allure:open": "allure open allure-report"
}
