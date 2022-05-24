import axios from "axios";
import { Dispatch } from "react";

import { Result } from "../../interfaces/Result";
import { ActionType } from "../action-types/types";
import { Action } from "../actions";

export const getSimilar =
  (id: number, name: string) => async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.LOADING_RESULTS });
    try {
      let res = await axios.post("https://tmdb.sandbox.zoosh.ie/dev/graphql", {
        query: `
            query getMovie {
              movie(id: ${id}) {
                similar(limit: 20) {
                  id
                  name
                  releaseDate
                  poster {
                    large
                  }
                }
              }
            }
            
            `,
      });

      const cleanResults: Result[] = res.data.data.movie.similar.filter(
        (cleanResult: Result) => {
          return cleanResult.poster!== null && cleanResult.releaseDate !== null;
        }
      );

      dispatch({
        type: ActionType.GET_SIMILAR,
        payload: { results: cleanResults, similarTo: name },
      });
    } catch (err) {
      console.log(err);
    }
  };
