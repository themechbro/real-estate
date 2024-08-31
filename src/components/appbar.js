import * as React from "react";
import { AppBar, Toolbar } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Search } from "@mui/icons-material";
import { Typography, Button, Box } from "@mui/joy";
import PropTypes from "prop-types";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
}

export default function Appbar(props) {
  return (
    <ElevationScroll {...props}>
      <AppBar
        sx={{
          backgroundColor: "#fafafa",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Typography level="h6" sx={{ color: "black" }}>
            <Search />
            Home
          </Typography>
          <Button>Login</Button>
          <Button>Sign Up</Button>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
