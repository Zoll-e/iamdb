import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as actionCreators from "../../state/action-creators/index";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import {
  DialogActions,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { State } from "../../state/reducers";

import { DialogBottom } from "./DialogBottom";

import SkeletonDialog from "./SkeletonDialog";

type Props = {
  open: boolean;
  handleClose: () => void;
  setSwitcher: any;
  descriptionElementRef: any;
};

const CardDialog: React.FC<Props> = ({
  open,
  handleClose,
  setSwitcher,
}) => {
  //Get Similar results
  const onClick = () => {
    handleClose();
    setSwitcher(true);
    getSimilar(movieState.id, movieState.name);
  };

  //State management
  const dispatch = useDispatch();
  const getSimilar = bindActionCreators(actionCreators.getSimilar, dispatch);
  const movieState = useSelector((state: State) => state.movie);

  //Screen size optimization
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      scroll="paper"
      fullWidth
      onClose={handleClose}
    >
      {movieState.loading ? (<SkeletonDialog />) :(
        <>
          <DialogTitle>
            <Typography
            sx={{fontWeight:"bold",fontSize:"h5.fontSize"}}
            >{movieState.name}</Typography>
          </DialogTitle>
          <DialogContent sx={{ height: "600px",textAlign:"justify" }} >
            <DialogContentText
              id="scroll-dialog-description"
              tabIndex={-1}
              
            >
              {movieState.wikiOverview}
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{justifyContent:"space-between"}}>
            <DialogBottom
              onClick={onClick}
              handleClose={handleClose}
              imdbLink={movieState.imdbLink}
              wikiLink={movieState.wikiLink}
            />
          </DialogActions>{" "}
        </>
      )}
    </Dialog>
  );
};

export default CardDialog;
