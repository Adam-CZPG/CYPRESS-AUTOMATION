describe('Scrolling', function() {
    it('Scroll to carusel', function(){
        cy.visit('https://unsplash.com/');
        cy.get('*[class^="UyEbs gdt34"]').type('Car{enter}');
        cy.get('h1[class="Aa1sS j8AIa xNKUO dvBHu oh0KJ tiVPC PP9J3 Snq3H"]').should('have.text','Car');
        cy.get(':nth-child(2) > .FBggh > .sHvDg').click();
        cy.get(':nth-child(1) > :nth-child(1) > .YdIix > :nth-child(1) > .GIFah > .zmDAx > .rEAWd > .omfF5 > .MorZF > .VQW0y > [data-test="photo-grid-multi-col-img"]').click();
        cy.get('.wl5gA').click();
        cy.get('.EdCFo > :nth-child(1) > .CwMIr').click();
        


    })
})