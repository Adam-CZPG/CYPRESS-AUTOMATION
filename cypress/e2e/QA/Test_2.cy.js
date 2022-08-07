describe('czv', () => {
    it('By',() => {
        cy.visit('https://rozetka.com.ua/');
        cy.viewport(1000, 660);
        cy.get('.basket-2-nd-step-basket desktop').click()
   
    })
        
})
