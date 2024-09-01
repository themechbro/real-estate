import * as React from "react";
import { AppBar, Toolbar } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Typography, Button, Box } from "@mui/joy";
import Badge from "@mui/joy/Badge";
import { useSelector } from "react-redux";
import DrawerBasic from "./drawer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
  const navigate = useNavigate();
  const cart = useSelector((state) => state.view.cart.length);
  console.log(cart);

  const [open1, setOpen1] = React.useState(false);

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
            justifyContent: "space-between",
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              level="h6"
              sx={{ color: "black", fontSize: "2rem", textDecoration: "none" }}
            >
              Find Home
            </Typography>
          </Link>
          <Box
            sx={{
              width: "500px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            {cart ? (
              <Badge badgeContent={cart}>
                <DrawerBasic />
              </Badge>
            ) : (
              <Button variant="plain" startDecorator={<ShoppingCartIcon />}>
                Cart
              </Button>
            )}

            <Button>Login</Button>
            <Button>Sign Up</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
