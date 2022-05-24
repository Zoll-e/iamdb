describe("Tests the landing page", () => {

  it("Site loads", () => {
    cy.visit("/");
  });

  it("Checks the navbar buttons", () => {
    //Iam DB button
    cy.get(".MuiButton-root").should("exist").click();
    cy.url().should("be.equal", "http://localhost:3000/");
    //Apex button exists
     cy.get('svg').should('exist');
  
  });
  it("Checks if the searchfield is usable", () => {
    cy.visit("/");
    cy.get("#\\:r1\\:").should("exist").click();
    cy.get("input").type("star wars{enter}");
    cy.get(":nth-child(1) > .MuiPaper-root > .MuiCardMedia-root", { timeout: 10000 }).should(
      "exist"
    );
    
  });
});
