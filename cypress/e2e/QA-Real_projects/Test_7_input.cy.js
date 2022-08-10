describe('Test Grinfer Input', function(){
    it('Test Grinfer input',() => {
cy.visit('https://grinfer.com/');
cy.viewport(1920,1080);
cy.get('.sc-1q9s0sp-4').type('Sport');
cy.get('.sc-tghwm-0').click();
cy.get(':nth-child(1) > .sc-g7i5pe-1 > .sc-1m292s3-1 > .sc-1m292s3-0').click();
cy.get('.sc-1xj3xob-0').click();
cy.get(':nth-child(1) > .sc-nxgpwc-0 > .sc-1xj3xob-0').click();
cy.get('.ant-input').type('assad@gmail.com');



    })
})