describe('Test Grinfer', function(){
    it('Test Grinfer btn',() => {
cy.visit('https://grinfer.com/');
cy.viewport(1920,1080);
cy.get('.sc-286flp-1').click();
cy.get(':nth-child(4) > .sc-8lxa00-9 > span').click();
cy.get('.sc-1u348iy-4 > .sc-1r4h3iu-0 > .sc-1r4h3iu-1 > .sc-103cb6u-1 > :nth-child(1)').click();
cy.get(':nth-child(2) > .sc-12axbdw-0').click();



    })
})