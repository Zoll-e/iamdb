describe("checks the result card properties and looks", () => {
  it("gets the card and its attributes", () => {
    cy.visit("/");
    cy.get("#\\:r1\\:").should("exist").click();
    cy.get("input").type("star wars{enter}");
    cy.get(":nth-child(1) > .MuiPaper-root > .MuiCardMedia-root", { timeout: 10000 }).should(
      "exist"
    );

    //Mui class
    cy.get(":nth-child(1) > .MuiPaper-root > .MuiCardMedia-root").should(
      "have.class",
      "MuiCardMedia-media"
    );
    //img source
   cy.get(':nth-child(1) > .MuiPaper-root > .MuiCardMedia-root').should('have.attr', 'src', 'https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg');
  });
});
