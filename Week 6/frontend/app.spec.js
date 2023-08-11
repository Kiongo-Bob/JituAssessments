import 'cypress'

describe("It should not be clickable", ()=>{
    it('should be disabled when inputs are empty', () => {
        cy.visit('http://127.0.0.1:5500/Week%206/frontend/input.html?');

        cy.get('#submit').should('be.disabled');
    
    
        cy.get('#fname').type('Kiongo');
        cy.get('#sname').type('Bob');
        cy.get('#cohortNo').type('10');
    
        cy.get('#submit').should('not.be.disabled');
      });
    });
