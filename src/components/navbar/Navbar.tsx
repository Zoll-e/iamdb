import { AppBar, Toolbar, Typography, Button, Link } from "@mui/material";
import React from "react";
import { ReactComponent as ApexLogo } from "../../assets/apex-logo.svg";

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {" "}
          <Button
            href="/"
            color="inherit"
            sx={{  fontSize: "h6.fontSize" }}
          >
            {" "}
            I am DB{" "}
          </Button>
        </Typography>
        <Link href="https://apexlab.io/" underline="none" color="inherit">
          <ApexLogo style={{ width: "auto", height: "2em" }} />
        </Link>
      </Toolbar>
    </AppBar>
  );
};
