/// <reference types='cypress'/>

describe("Home page", () => {
  it("Home page load", () => {
    cy.visit("https://gallery-app.vivifyideas.com/");
    cy.wait(2000);
  });
});

