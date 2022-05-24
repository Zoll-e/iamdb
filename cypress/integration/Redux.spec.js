describe("should load initstate", () => {
  it("has expected state on load", () => {
    cy.visit("/");
    cy.window()
      .its("store")
      .invoke("getState")
      .should("deep.equal", {
        results: {
          loading: false,
          results: [],
          similarTo: "",
          similar: [],
          search: "",
        },

        movie: {
          loading: false,
          id: 0,
          name: "",
          wikiOverview: "",
          wikiLink: "",
          imdbLink: "",
        },
      });
  });
  it("can dispatch actions", () => {
    cy.visit("/");

    // dispatch Redux action
    cy.window().its("store").invoke("dispatch", {
      type: "LOADING_RESULTS",
    });

    cy.get(".MuiCircularProgress-svg").should("exist");
  });

  it("updates the results state properly", () => {
    cy.window()
      .its("store")
      .invoke("dispatch", {
        type: "GET_RESULTS",
        payload: {
          results: [
            {
              id: "2108",
              poster: {
                large: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/vSqk5BeQ1HvP9wq0rWZyWqiwXeF.jpg",
              },
              name: "The Breakfast Club",
              releaseDate: "1985-02-15T00:00:00.000Z",
            },
          ],
          search: "breakfast club",
        },
      });

    cy.window()
      .its("store")
      .invoke("getState")
      .its("results.results")
      .should("have.length", 1);
  });

  it("updates the moviedetails state properly", () => {
    cy.window()
      .its("store")
      .invoke("dispatch", {
        type: "GET_MOVIE_DETAILS",
        payload: {
          id: "2108",
          name: "The Breakfast Club",
          wikiLink: "https://en.wikipedia.org/?curid=29943",
          imdbLink: "https://www.imdb.com/title/tt0088847/",
          wikiOverview: "wikiData[0].extract",
        },
      });

    cy.window()
      .its("store")
      .invoke("getState")
      .its("movie.id")
      .should("be.equal", "2108");
  });
});
