

describe("Testing form inputs", () => {
      beforeEach(() => {
        cy.visit("http://localhost:3000");
      })
        it("adding text to inputs and submits the form", () => {
          //name
          cy.get('[data-cy="name"]').type("Andre").should("have.value", "Andre")
          //email
          cy.get('[data-cy="email"]')
            .type("test@gmail.com")
            .should("have.value", "test@gmail.com")
          //password
          cy.get('[data-cy="password"]')
            .type("pw123")
            .should("have.value", "pw123")
          //checkbox
          cy.get("[data-cy=terms]")
            .check()
            .should("be.checked")

        })

        it("Submit button posts form data", () => {  
          //submit
          cy.get('form').submit()
        })

        it("Validation for an empty string", () => {  
          //submit
          cy.get('[data-cy="email"]').type('a')
          cy.get('[data-cy="email"]').clear
          cy.get('[data-cy="email"]').then(($input) => {
            expect($input[1].validationMessage).to.eq('Must include an email address.')
          })
        })
        
})
  