describe("Login", function(){
it("Sing in", function(){ 
  cy.visit("https://unsplash.com/")
  cy.contains('Log in').click()
  cy.get('input[type="email"]').type('asdsd@gmail.com')
  cy.get('input[type="password"]').type('Q684858564488s')
  cy.get('input[type="submit"]').click()
})

})