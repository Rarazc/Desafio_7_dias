function validateApiResponse(response, expectedStatusCode) {
  if (!response || typeof response.statusCode === 'undefined') {
    throw new Error(`Objeto de response inválido recebido: ${JSON.stringify(response)}`);
  }

  if (response.statusCode !== expectedStatusCode) {
    throw new Error(`Status incorreto. Esperado ${expectedStatusCode}, recebido ${response.statusCode}`);
  }

  if (!response.body || typeof response.body !== 'object') {
    throw new Error('Response body inválido ou inexistente');
  }

  cy.log(`API respondeu ${response.statusCode} com body válido`);
}


export {
  validateApiResponse
}