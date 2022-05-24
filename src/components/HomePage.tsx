import React from "react";

import { useSelector } from "react-redux";

import SearchMovie from "./search/SearchMovie";
//import "./HomePage.css";

import { Container, Grid, Box } from "@mui/material";

import CardDialog from "./cardDialog/CardDialog";
import SearchSwitcher from "./search/SearchSwitcher";
import { useDispatch } from "react-redux";
import { State } from "../state/reducers";
import { bindActionCreators } from "redux";
import { drawCards } from "../utils/drawCards";
import * as actionCreators from "../state/action-creators/index";
import { Navbar } from "./navbar/Navbar";
import { Spinner } from "../utils/Spinner";
import Background from "../assets/Mosomaci1.png";
import NoResult from "../assets/szomimaci.png";

const HomePage = () => {
  //redux
  const dispatch = useDispatch();
  const resultsState = useSelector((state: State) => state.results);
  const getResults = bindActionCreators(actionCreators.getResults, dispatch);
  //Searchbox controls
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    if (e.key === "Enter" && value !== "") {
      getResults(value);
      setSwitcher(false);
    }
  };

  //Switch betwwen results
  const [switcher, setSwitcher] = React.useState(false);
  //Dialog controls
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  //Change the background if there`s no results
  const background =
    resultsState.search === ""
      ? Background
      : resultsState.results < 1 && NoResult;

  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        margin: "auto",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        backgroundPositionY: "5rem",
        backgroundSize: "contain",
        backgroundPosition:"center center",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar />

      <Container
        sx={{
          margin: "auto",
          flexGrow: 1,
        }}
      >
        <Grid
          justifyContent="left"
          sx={{ marginTop: "2em", justifyContent: "space-between" }}
          container
        >
          <Grid item md={resultsState.similarTo !== "" ? 6 : 12} xs={12}>
            <SearchMovie handleKeyDown={handleKeyDown} />
          </Grid>

          <Grid item>
            <SearchSwitcher
              switcher={switcher}
              setSwitcher={setSwitcher}
              search={resultsState.search}
              similarTo={resultsState.similarTo}
            />
          </Grid>
        </Grid>
      </Container>

      {resultsState.loading ? (
        <Spinner />
      ) : (
        <Grid
          container
          sx={{
            width: "90%",
            margin: "auto",
          }}
        >
          {!switcher
            ? drawCards(resultsState.results, setOpen)
            : drawCards(resultsState.similar, setOpen)}
        </Grid>
      )}

      <CardDialog
        open={open}
        handleClose={handleClose}
        descriptionElementRef={descriptionElementRef}
        setSwitcher={setSwitcher}
      />
    </Box>
  );
};

export default HomePage;
