/// <reference types='cypress'/>

describe("Home page", () => {
  it("Check all elements on the login page", () => {
    cy.visit("https://gallery-app.vivifyideas.com/");
    cy.wait(2000);
  });
});

