import { Stack, Switch, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

type Props = {
  search: string;
  similarTo: string;
  setSwitcher: any;
  switcher: boolean;
};

const searchSwitcher: React.FC<Props> = ({
  similarTo,
  setSwitcher,
  switcher,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSwitcher(event.target.checked);
  };

  return (
    <>
      {similarTo && (
        <Stack direction="row">
          <Typography>Original search</Typography>
          <Switch
            checked={switcher}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
            disabled={!similarTo && true}
          />
          <Typography>Similar to: {similarTo}</Typography>
        </Stack>
      )}
    </>
  );
};

export default searchSwitcher;
