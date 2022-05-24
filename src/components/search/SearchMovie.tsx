import { TextField } from "@mui/material";
import React from "react";

type Props = {
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

const SearchMovie: React.FC<Props> = ({ handleKeyDown }) => {
  return (
    <TextField
      label="Search for a movie"
      variant="standard"
      fullWidth
      onKeyDown={handleKeyDown}
    />
  );
};

export default SearchMovie;
