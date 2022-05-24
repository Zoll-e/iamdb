import { combineReducers } from "redux";
import movieReducer from "./movie"
import resultsReducer from "./results";

const reducers = combineReducers({
  results:resultsReducer,
  movie:movieReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>


