/// <reference types='cypress'/>

describe("Register page", () => {
  it("Checking elements on the register page", () => {
    cy.visit("register");
    cy.get("#first-name").type("Pera");
    cy.get("#last-name").type("Peric");
    cy.get("#email").type("draganaa@gmail.com");
    cy.get("#password").type("pokusavam100");
    cy.get("#password-confirmation").type("pokusavam100");
    cy.get(".form-check-input").type("checkbox");
    cy.get(".form-check-label");
    cy.get("[class='btn btn-custom']").click();
    cy.wait(3000);
  })
}); 