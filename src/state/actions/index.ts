import { MovieDetail } from "../../interfaces/MovieDetail";
import { Result } from "../../interfaces/Result";
import { ActionType } from "../action-types/types";

interface GetResultAction {
  type: ActionType.GET_RESULTS;
  payload: {
    results: Result[];
    search: string;
  };
}
interface ResultsLoadingAction {
  type: ActionType.LOADING_RESULTS;
}
interface MovieDetailAction {
  type: ActionType.GET_MOVIE_DETAILS;
  payload: MovieDetail;
}
interface MovieLoadingAction {
  type: ActionType.MOVIE_LOADING;
}

interface GetSimilarAction {
  type: ActionType.GET_SIMILAR;
  payload: {
    results: Result[];
    similarTo: string;
  };
}



export type Action =
  | GetResultAction
  | GetSimilarAction
  | ResultsLoadingAction
  | MovieDetailAction
  | MovieLoadingAction;
