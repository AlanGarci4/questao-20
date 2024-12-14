describe('Testes de Validação de Entrada', () => {
  it('não deve permitir XSS em campos de entrada', () => {
    cy.request({
      method: 'POST',
      url: '/api/comments',
      body: { text: '<script>alert("XSS")</script>' },
      failOnStatusCode: false,  
    }).then((response) => {
      
      //A resposta não deve conter o script.
      
      expect(response.body.text).to.not.include('<script>'); 
    });
  });
});
