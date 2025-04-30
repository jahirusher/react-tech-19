import { mount } from 'cypress/react';
import Quiz from '../../../client/src/components/Quiz'; 

describe('Quiz Component', () => {
  it('starts the quiz and shows the first question', () => {
    mount(<Quiz />);

    cy.contains('Start Quiz').click();

    cy.get('h2').should('be.visible');
  });

  it('allows answering all questions and displays final score', () => {
    mount(<Quiz />);


    cy.contains('Start Quiz').click();

    for (let i = 0; i < 10; i++) {

      cy.get('button.btn.btn-primary').first().click();
    }


    cy.contains('Quiz Completed').should('be.visible');
    cy.contains('Your score').should('be.visible');
    cy.contains('Take New Quiz').should('be.visible');
  });

  it('can start a new quiz after completing one', () => {
    mount(<Quiz />);

    cy.contains('Start Quiz').click();


    for (let i = 0; i < 10; i++) {
      cy.get('button.btn.btn-primary').first().click();
    }


    cy.contains('Take New Quiz').click();

    cy.get('h2').should('be.visible');
  });
});
