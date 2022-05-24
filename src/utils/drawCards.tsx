import ResultCard from "../components/resultCard/ResultCard";
import {Result} from "../interfaces/Result";
import React from "react";

export const drawCards = (results:[],setOpen:Function) => results.map((result: Result, index: number) => (
    <ResultCard key={index} setOpen={setOpen} result={result } />
  ))

  