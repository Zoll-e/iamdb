describe("Tests the dialog texts and conrtols", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.get("input").type("matrix{enter}");
    cy.get(":nth-child(2) > .MuiPaper-root > .MuiCardMedia-root", { timeout: 10000 }).click();

   
  });

  it('checks if the dialog is visible',()=>{
  cy.get('#\\:r3\\:').should("be.visible");

  })

  it('checks the title',()=>{
    cy.get('#\\:r3\\: > .MuiTypography-root').should('have.text', 'The Matrix');
  })

  it('checks the dialog buttons',()=>{
    //Search similar button
    cy.get('[data-testid="SearchIcon"]').should("be.visible");
    //wikilogolink
    cy.get('.MuiDialogActions-root > :nth-child(2) > :nth-child(2)').should('be.visible');
    //imdblogolink
    cy.get(':nth-child(3) > svg').should('be.visible');


  })
});
