describe('Testes de Exposição de Dados Sensíveis', () => {
  it('Não deve expor senhas nos logs ou respostas', () => {
    cy.request({
      method: 'GET',
      url: '/api/users/123',
      failOnStatusCode: false,
    }).then((response) => {

      //A resposta não deve conter dados sensíveis como senhas.

      expect(response.body).to.not.have.property('password');
    });
  });
});
