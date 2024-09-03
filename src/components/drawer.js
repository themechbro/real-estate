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
import { Paper, Grid, Card, Fade, Slide } from "@mui/material";

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
        sx={{
          borderRadius: "50px",
          padding: "10px 20px",
          fontSize: "18px",
          fontWeight: "bold",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "#f9f9f9",
            color: "#333",
            animation: "bounce 0.5s ease",
          },
        }}
      >
        Cart
      </Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor="right"
        size="lg"
        sx={{
          "& .MuiDrawer-paper": {
            background: "#f9f9f9",
            padding: "20px",
            width: "400px",
            transition: "all 0.3s ease",
          },
        }}
      >
        <Slide direction="right" in={open} mountOnEnter unmountOnExit>
          <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <Fade in={open} timeout={500}>
              <Typography
                level="h1"
                className="text-center"
                sx={{
                  padding: "1rem",
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                Your Cart ({cart.length})
              </Typography>
            </Fade>
            <Grid container spacing={2}>
              {cart.map((i) => (
                <Grid item xs={12} key={i.id}>
                  <Fade in={open} timeout={500}>
                    <Card
                      variant="outlined"
                      sx={{
                        padding: "20px",
                        borderRadius: "20px",
                        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          boxShadow: "0px 0px 20px rgba(0,0,0,0.2)",
                          transform: "scale(1.05)",
                        },
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={4}>
                          <Avatar
                            size="lg"
                            src={i.image}
                            sx={{
                              borderRadius: "10px",
                              width: "100%",
                              height: "100%",
                              "&:hover": {
                                transform: "rotate(10deg)",
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={8}>
                          <Typography
                            level="title-lg"
                            sx={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              color: "#333",
                            }}
                          >
                            {i.name}
                          </Typography>
                          <Typography
                            level="body-lg"
                            sx={{
                              fontSize: "14px",
                              color: "#666",
                            }}
                          >
                            {i.description}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Typography
                        level="body-lg"
                        sx={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "#666",
                          marginTop: "10px",
                        }}
                      >
                        $ {i.price}
                      </Typography>
                    </Card>
                  </Fade>
                </Grid>
              ))}
            </Grid>
            <Divider
              sx={{
                marginBottom: 5,
              }}
            />
            <Fade in={open} timeout={500}>
              <Button
                variant="contained"
                color="success"
                sx={{ width: "100%", marginTop: "10%" }}
                level="body-lg"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Buy
              </Button>
            </Fade>
          </Box>
        </Slide>
      </Drawer>
    </Box>
  );
}

// import * as React from "react";
// import Box from "@mui/joy/Box";
// import Drawer from "@mui/joy/Drawer";
// import Button from "@mui/joy/Button";
// import List from "@mui/joy/List";
// import Divider from "@mui/joy/Divider";
// import ListItem from "@mui/joy/ListItem";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { useSelector } from "react-redux";
// import Avatar from "@mui/joy/Avatar";
// import ListDivider from "@mui/joy/ListDivider";
// import { useNavigate } from "react-router-dom";
// import ListItemContent from "@mui/joy/ListItemContent";
// import ListItemDecorator from "@mui/joy/ListItemDecorator";
// import Typography from "@mui/joy/Typography";
// import { Paper } from "@mui/material";

// export default function DrawerBasic() {
//   const navigate = useNavigate();
//   const cart = useSelector((state) => state.view.cart);
//   const [open, setOpen] = React.useState(false);

//   const toggleDrawer = (inOpen) => (event) => {
//     if (
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }

//     setOpen(inOpen);
//   };

//   return (
//     <Box sx={{ display: "flex" }}>
//       <Button
//         startDecorator={<ShoppingCartIcon />}
//         variant="outlined"
//         color="neutral"
//         onClick={toggleDrawer(true)}
//       >
//         Cart
//       </Button>
//       <Drawer
//         open={open}
//         onClose={toggleDrawer(false)}
//         anchor="right"
//         size="lg"
//       >
//         <Box
//           role="presentation"
//           onClick={toggleDrawer(false)}
//           onKeyDown={toggleDrawer(false)}
//         >
//           <Typography
//             level="h1"
//             className="text-center"
//             sx={{ padding: "1rem" }}
//           >
//             Your Cart ({cart.length}){" "}
//           </Typography>
//           <List sx={{ marginBottom: 5 }}>
//             {cart.map((i) => (
//               <div>
//                 <Paper elevation={4} sx={{ padding: 1, marginBottom: 2 }}>
//                   <ListItem sx={{ padding: 2 }}>
//                     <ListItemDecorator>
//                       <Avatar size="lg" src={i.image} sx={{ marginRight: 1 }} />
//                     </ListItemDecorator>
//                     <Typography level="title-lg">{i.name}</Typography>
//                   </ListItem>
//                   <ListItem>
//                     <Typography level="body-lg">{i.description}</Typography>
//                   </ListItem>
//                   <ListDivider inset="gutter" />
//                   <Typography level="body-lg">$ {i.price}</Typography>
//                 </Paper>
//               </div>
//             ))}
//           </List>
//           <Divider
//             sx={{
//               marginBottom: 5,
//             }}
//           />
//           <Button
//             variant="outlined"
//             color="success"
//             sx={{ width: "100%", marginTop: "10%" }}
//             level="body-lg"
//             onClick={() => navigate("/checkout")}
//           >
//             Proceed to Buy
//           </Button>
//         </Box>
//       </Drawer>
//     </Box>
//   );
// }
