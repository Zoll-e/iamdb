import { AnyAction } from "redux";
import { ResultsState } from "../../interfaces/ResultsState";
import { ActionType } from "../action-types/types";

const initialState: ResultsState = {
  loading: false,
  results: [],
  similarTo: "",
  similar: [],
  search: "",
};

const resultsReducer = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.GET_RESULTS:
      return {
        ...state,
        loading: false,
        results: payload.results,
        search: payload.search,
        similarTo: "",
        similar: [],
      };

    case ActionType.GET_SIMILAR:
      return {
        ...state,
        loading: false,
        similarTo: payload.similarTo,
        similar: payload.results,
      };

    case ActionType.LOADING_RESULTS:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default resultsReducer;
