describe('Testes de Autenticação e Autorização', () => {
  it('deve retornar 401 se o token não for fornecido', () => {
    cy.request({
      method: 'GET',
      url: '/api/protected-endpoint',
      failOnStatusCode: false, 
    }).then((response) => {

      //Espera-se um 401 Unauthorized. Ou seja, não autoorizado.

      expect(response.status).to.eq(401); 
    });
  });

  it('deve retornar 403 se o token for inválido', () => {
    cy.request({
      method: 'GET',
      url: '/api/protected-endpoint',
      headers: {
        Authorization: 'Bearer token-invalido',
      },
      failOnStatusCode: false, 
    }).then((response) => {

      //Espera-se um 403 Forbidden.

      expect(response.status).to.eq(403); 
    });
  });
});
