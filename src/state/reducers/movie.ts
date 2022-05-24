import { AnyAction } from "redux";
import { MovieState } from "../../interfaces/MovieState";
import { ActionType } from "../action-types/types";

const initialState:MovieState = {
  loading: false,
  id: 0,
  name: "",
  wikiOverview: "",
  wikiLink: "",
  imdbLink: "",
};

 const movieReducer =(state = initialState, action: AnyAction) =>{
  const { type, payload} = action;

  switch (type) {
    case ActionType.GET_MOVIE_DETAILS:
      return {
        ...state,
        loading: false,
        id:payload.id,
        name: payload.name,
        wikiOverview: payload.wikiOverview,
        wikiLink: payload.wikiLink,
        imdbLink: payload.imdbLink,
      };

    case ActionType.MOVIE_LOADING:
      return {
        ...state,
        loading: true,
      };

   
      
    default:
      return state;
  }
}

export default movieReducer;
