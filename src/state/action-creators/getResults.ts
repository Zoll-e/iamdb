import axios from "axios";
import { Action, Dispatch } from "redux";
import { Result } from "../../interfaces/Result";
import { ActionType } from "../action-types/types";

export const getResults =
  (search: string) => async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.LOADING_RESULTS });
    try {
      let res = await axios.post("https://tmdb.sandbox.zoosh.ie/dev/graphql", {
        query: `
          query SearchMovies {
            searchMovies(query: "${search}") {
                id
                name  
                releaseDate
                 poster {
                  
                 large
                }                }   
              }
            `,
      });

      //Filter out movies without picture and/or poster for safety
      const cleanResults: Result[] = res.data.data.searchMovies.filter(
        (cleanResult: Result) => {
          return cleanResult.poster !== null && cleanResult.releaseDate !== null;
        }
      );

      dispatch({
        type: ActionType.GET_RESULTS,
        payload: { results: cleanResults, search: search },
      });
    } catch (err) {
      console.log(err);
    }
  };
