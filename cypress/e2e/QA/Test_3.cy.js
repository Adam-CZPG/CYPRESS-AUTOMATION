describe("Assertion", function (){
    it('Assert Web test',() => {
        cy.visit('https://www.coursera.org/');
        cy.viewport(1920, 1080);
        cy.location('protocol').should('eq', 'https:');
        cy.title().should('eq', 'Coursera | Degrees, Certificates, & Free Online Courses');
        cy.get('*[class^="c-ph-right-nav-button c-ph-log-in isLohpRebrand"]').should('be.visible').click();
        cy.get('input[id="email"]').type('dfsdfds@gmail.com').should('have.value', 'dfsdfds@gmail.com');
        cy.get('input[id="password"]').type('Q123213d').should('have.value', 'Q123213d');
        cy.contains('Login').should('be.visible').click();

        
       });

        
})
