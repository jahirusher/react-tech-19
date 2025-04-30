describe('Tech Quiz App', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3001');
    });
  
    it('starts a quiz and shows questions', () => {

      cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
  

      cy.contains('Start Quiz').click();

      cy.wait('@getQuestions');
  

      cy.get('h2').should('be.visible');
    });
  

  });
  
  