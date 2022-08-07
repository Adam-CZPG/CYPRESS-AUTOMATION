describe('czv', () => {
    it('By',() => {
        cy.visit('https://www.czc.cz/');
        cy.viewport(1000, 660);
        cy.contains('Honeywell MS7120 Orbit - USB, černá').click();
   
    })
        
})
