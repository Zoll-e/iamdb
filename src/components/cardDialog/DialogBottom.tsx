import {
    Box,
    Button,
    Slide,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import { openInNewTab } from "../../utils/openInNewTab";
  import CloseIcon from "@mui/icons-material/Close";
  import { ReactComponent as WikiLogo } from "../../assets/wikipedia-logo.svg";
  import { ReactComponent as ImdbLogo } from "../../assets/imdb-logo.svg";
  import SearchIcon from "@mui/icons-material/Search";
  
  type Props = {
    onClick: any;
    handleClose: any;
    wikiLink: string;
    imdbLink: string;
  };
  
  export const DialogBottom: React.FC<Props> = ({
    onClick,
    handleClose,
    wikiLink,
    imdbLink,
  }) => {
    const [visible, setVisible] = useState(false);
    return (
      <React.Fragment>
        <Box>
          <Button onClick={handleClose}>
            <CloseIcon fontSize="large" />
          </Button>
        </Box>
        <Box>
          <Button
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            onClick={onClick}
          
            sx={{overflow:"hidden", height: "3em" }}
          >
            <SearchIcon fontSize="large" />
            <Slide direction="left" mountOnEnter unmountOnExit in={visible}>
              {<Typography>Similar Results</Typography>}
            </Slide>
          </Button>
  
          <Button
            onClick={() => openInNewTab(wikiLink)}
          >
            <WikiLogo style={{width:"5em", height: "3em" }} />
          </Button>
          <Button
            onClick={() => openInNewTab(imdbLink)}
            
          >
            <ImdbLogo style={{height:"2.5em",width:"5em"}}/>
          </Button>
        </Box>
      </React.Fragment>
    );
  };
  