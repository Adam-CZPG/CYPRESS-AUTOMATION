describe('Test Grinfer Input', function(){
    it('Test Grinfer input',() => {
cy.visit('https://grinfer.com/');
cy.viewport(1920,1080);
cy.get('.sc-2aalce-3').click();
cy.get('*[class="sc-1jty8j6-2 eFauX"]');
cy.get('#email').type('sdfsd@gmail.com');
cy.get('#firstName').type('Adam');
cy.get('#lastName').type('Stev');
cy.get('#password').type('Q2e2321321d');
cy.get('.sc-p4qn9p-0').click();




    })
})