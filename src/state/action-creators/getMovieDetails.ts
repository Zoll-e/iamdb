import { Dispatch } from "react";
import { MovieDetail } from "../../interfaces/MovieDetail";
import getImdbLink from "../../utils/getImdbLink";
import wikiRequest from "../../utils/wikiRequest";
import { ActionType } from "../action-types/types";
import { Action } from "../actions";

export const getMovieDetails = (
    id: number,
    name: string,
    releaseDate: number
) => async (dispatch: Dispatch<Action>) => {
    dispatch({
        type: ActionType.MOVIE_LOADING,
    });
    try {
        /*get the most accurate result`s with srsearch by 
        providing releasedate + adding film to the search*/
        const srsearch = name + " " + releaseDate.toString().slice(0, 4) + " film";

        const searchForTitle = {
            action: "query",
            format: "json",
            origin: "*",
            list: "search",
            srlimit: 1,
            srsearch: srsearch,
        };

        var pageid = await wikiRequest(searchForTitle);
        pageid = pageid.search[0].pageid;
        //get the article by the previously extracted pageid
        const extractWikiArticle = {
            action: "query",
            format: "json",
            origin: "*",
            exintro: 1,
            prop: "extracts",
            explaintext: 1,
            pageids: pageid,
        };

        const wikiExtract = await wikiRequest(extractWikiArticle);

        const wikiData = Object.keys(wikiExtract.pages).map(
            (id) => wikiExtract.pages[id]
        );

        const wikiLink = `https://en.wikipedia.org/?curid=${wikiData[0].pageid}`;
        //get imdb link
        const imdbLink = await getImdbLink(name);

        const movieDetail: MovieDetail = {
            id:id,
            name: name,
            wikiLink: wikiLink,
            imdbLink: imdbLink,
            wikiOverview: wikiData[0].extract,
        };
        return dispatch({
            type: ActionType.GET_MOVIE_DETAILS,
            payload: movieDetail,
        });
    } catch (err) {
        console.log(err)
    }
};


