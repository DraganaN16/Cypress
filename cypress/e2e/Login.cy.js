/// <reference types='cypress'/>

describe("Login page", () => {
  it("Check all elements on the login page", () => {
    cy.visit("login");
    cy.get("#email").type("draganan@gmail.com");
    cy.get("#password").type("pokusavam100");
    cy.get("button[type='submit']").click();
    cy.wait(2000);
  });
});