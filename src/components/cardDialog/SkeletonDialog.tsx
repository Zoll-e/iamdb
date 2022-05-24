import * as React from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Button, DialogActions, Skeleton } from "@mui/material";

const SkeletonDialog = () => {
  return (
    <React.Fragment>
      <DialogTitle>
        <Skeleton variant="text" />
      </DialogTitle>
      <DialogContent sx={{ height: "600px" }}>
        <DialogContentText>
          {[...Array(16)].map((x, index) => (
            <Skeleton
              key={index}
              width={"100%"}
              variant="text"
            />
          ))}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "space-between" }}>
        <Box>
          <Button>
            <Skeleton variant="text" width="2em" height="2.5em" />
          </Button>
        </Box>
        <Box>
          <Button>
            <Skeleton variant="text" width="3em" height="2.5em" />
          </Button>
          <Button>
            <Skeleton variant="text" width="5em" height="2.5em" />
          </Button>
          <Button>
            <Skeleton variant="text" width="5em" height="2.5em" />
          </Button>
        </Box>{" "}
      </DialogActions>
    </React.Fragment>
  );
};

export default SkeletonDialog;
