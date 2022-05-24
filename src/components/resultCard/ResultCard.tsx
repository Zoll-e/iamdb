import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

//interface/types
import { Result } from "../../interfaces/Result";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "../../state/action-creators/index";

interface ResultProps {
  result: Result;
  setOpen: Function;
}

const ResultCard: React.FC<ResultProps> = ({
  result: { id, name, poster, releaseDate },
  setOpen,
}) => {

  //Redux
  const dispatch = useDispatch();
  const getMovieDetails = bindActionCreators(
    actionCreators.getMovieDetails,
    dispatch
  );
  //Movie Details
  const onClick = () => {
    setOpen(true);
    getMovieDetails(id, name, releaseDate);
  };
  return (
    <Grid item xs={12} md={4} lg={2}>
      <Card sx={{margin:"1em"}}>
        <CardMedia
          sx={{ cursor: "pointer"}}
          onClick={onClick}
          component="img"
          image={poster.large}
          alt=""
        />
      </Card>
    </Grid>
  );
};

export default ResultCard;
