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

  it("checks if theres overview",()=>{
    cy.get('#scroll-dialog-description').should("exist");




    cy.get('#scroll-dialog-description').should(
      'have.text',
      'The Matrix is a 1999 science fiction action film written and directed by the Wachowskis. It is the first installment in The Matrix film series, starring Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, and Joe Pantoliano. It depicts a dystopian future in which humanity is unknowingly trapped inside a simulated reality, the Matrix, which intelligent machines have created to distract humans while using their bodies as an energy source. When computer programmer Thomas Anderson, under the hacker alias "Neo", uncovers the truth, he joins a rebellion against the machines along with other people who have been freed from the Matrix.\nThe Matrix is an example of the cyberpunk subgenre of science fiction. The Wachowskis\' approach to action scenes was influenced by Japanese animation and martial arts films, and the film\'s use of fight choreographers and wire fu techniques from Hong Kong action cinema influenced subsequent Hollywood action film productions. The film popularized a visual effect known as "bullet time", in which the heightened perception of certain characters is represented by allowing the action within a shot to progress in slow-motion while the camera appears to move through the scene at normal speed, allowing the sped-up movements of certain characters to be perceived normally.\nThe Matrix opened in theaters in the United States on March 31, 1999 to widespread acclaim from critics, who praised its innovative visual effects, action sequences, cinematography and entertainment value, and was a massive success at the box office, grossing over $460 million on a $63 million budget, becoming the highest-grossing Warner Bros. film of 1999 and the fourth highest-grossing film of that year. At the 72nd Academy Awards, the film won all four categories it was nominated for, Best Visual Effects, Best Film Editing, Best Sound, and Best Sound Editing. The film was also the recipient of numerous other accolades, including Best Sound and Best Special Visual Effects at the 53rd British Academy Film Awards, and the Wachowskis were awarded Best Director and Best Science Fiction Film at the 26th Saturn Awards. The film is considered to be among the greatest science fiction films of all time, and in 2012, the film was selected for preservation in the United States National Film Registry by the Library of Congress for being "culturally, historically, and aesthetically significant."The film\'s success led to two feature film sequels being released in 2003, The Matrix Reloaded and The Matrix Revolutions, which were also written and directed by the Wachowskis. The Matrix franchise was further expanded through the production of comic books, video games and animated short films, with which the Wachowskis were heavily involved. The franchise has also inspired books and theories expanding on some of the religious and philosophical ideas alluded to in the films. A fourth film, titled The Matrix Resurrections, was released on December 22, 2021.\n\n'
    );

  });
  it('checks the dialog buttons',()=>{
    //Search similar button
    cy.get('[data-testid="SearchIcon"]').should("be.visible");
    //wikilogolink
    cy.get('.MuiDialogActions-root > :nth-child(2) > :nth-child(2)').should('be.visible');
    //imdblogolink
    cy.get(':nth-child(3) > svg').should('be.visible');


  })
});
