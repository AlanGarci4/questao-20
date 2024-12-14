describe('Testes de Injeção SQL', () => {
  it('não deve permitir SQL Injection em parâmetros', () => {
    cy.request({
      method: 'GET',
      url: '/api/users',
      qs: { id: '1 OR 1=1' },  
      failOnStatusCode: false,  
    }).then((response) => {
      
      //A API não deve retornar dados sensíveis.

      expect(response.status).to.not.eq(200); 
    });
  });
});
