import * as React from "react";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import Button from "@mui/joy/Button";
import List from "@mui/joy/List";
import Divider from "@mui/joy/Divider";
import ListItem from "@mui/joy/ListItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import Avatar from "@mui/joy/Avatar";
import ListDivider from "@mui/joy/ListDivider";
import { useNavigate } from "react-router-dom";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import { Paper } from "@mui/material";

export default function DrawerBasic() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.view.cart);
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (inOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(inOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Button
        startDecorator={<ShoppingCartIcon />}
        variant="outlined"
        color="neutral"
        onClick={toggleDrawer(true)}
      >
        Cart
      </Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor="right"
        size="lg"
      >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Typography
            level="h1"
            className="text-center"
            sx={{ padding: "1rem" }}
          >
            Your Cart ({cart.length}){" "}
          </Typography>
          <List sx={{ marginBottom: 5 }}>
            {cart.map((i) => (
              <div>
                <Paper elevation={4} sx={{ padding: 1, marginBottom: 2 }}>
                  <ListItem sx={{ padding: 2 }}>
                    <ListItemDecorator>
                      <Avatar size="lg" src={i.image} sx={{ marginRight: 1 }} />
                    </ListItemDecorator>
                    <Typography level="title-lg">{i.name}</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography level="body-lg">{i.description}</Typography>
                  </ListItem>
                  <ListDivider inset="gutter" />
                  <Typography level="body-lg">$ {i.price}</Typography>
                </Paper>
              </div>
            ))}
          </List>
          <Divider
            sx={{
              marginBottom: 5,
            }}
          />
          <Button
            variant="outlined"
            color="success"
            sx={{ width: "100%", marginTop: "10%" }}
            level="body-lg"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Buy
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}
