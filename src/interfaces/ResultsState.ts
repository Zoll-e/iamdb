import { Result } from "./Result";

export interface ResultsState {
  loading: boolean;
  results: Result[];
  similarTo: string;
  similar: Result[];
  search: string;
}
