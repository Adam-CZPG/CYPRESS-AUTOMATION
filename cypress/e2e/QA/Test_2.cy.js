describe('czv', () => {
    it('By',() => {
        cy.visit('https://www.alza.cz/EN/');
        cy.viewport(1000, 660);
        cy.get('input[id="edtSearch"]').type('iphone 12');
        cy.contains('Search').click();
        cy.contains('iPhone 12 128GB Black').click(); 
        cy.get('a[class="btnx new green buy js-buy-button"]').click();
   
    });
        
})
