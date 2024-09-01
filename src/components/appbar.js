import * as React from "react";
import { AppBar, Toolbar, useScrollTrigger } from "@mui/material";
import { Typography, Button, Box } from "@mui/joy";
import Badge from "@mui/joy/Badge";
import { useSelector } from "react-redux";
import DrawerBasic from "./drawer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });
  const theme = useTheme();
  return children
    ? React.cloneElement(children, {
        sx: {
          width: trigger ? "100%" : "1200px",
          position: "fixed",
          top: 0,
          left: trigger ? 0 : "calc(50% - 600px)",
          right: trigger ? 0 : "calc(50% - 600px)",
          transition: "width 0.3s ease, left 0.3s ease, right 0.3s ease",
          elevation: trigger ? 4 : 0,
          [theme.breakpoints.down("md")]: {
            // Add this media query
            width: "100%",
            left: 0,
            right: 0,
          },
        },
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
          backgroundColor: "#FFF",
          padding: "10px 20px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
          color: "#333",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              level="h6"
              sx={{
                color: "black",
                fontSize: "2rem",
                textDecoration: "none",
                fontWeight: "bold",
              }}
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
              alignItems: "center",
            }}
          >
            {cart ? (
              <Badge
                badgeContent={cart}
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#333",
                    color: "#fff",
                    fontSize: "12px",
                    padding: "4px 8px",
                    borderRadius: "10px",
                  },
                }}
              >
                <DrawerBasic />
              </Badge>
            ) : (
              <Button
                variant="plain"
                startDecorator={<ShoppingCartIcon />}
                sx={{
                  color: "#333",
                  fontSize: "16px",
                  textTransform: "none",
                }}
              >
                Cart
              </Button>
            )}

            <Button
              variant="outlined"
              sx={{
                color: "#333",
                fontSize: "16px",
                textTransform: "none",
                borderColor: "#333",
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              sx={{
                color: "#fff",
                fontSize: "16px",
                textTransform: "none",
                backgroundColor: "#333",
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

// import * as React from "react";
// import { AppBar, Toolbar } from "@mui/material";
// import useScrollTrigger from "@mui/material/useScrollTrigger";
// import { Typography, Button, Box } from "@mui/joy";
// import Badge from "@mui/joy/Badge";
// import { useSelector } from "react-redux";
// import DrawerBasic from "./drawer";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// function ElevationScroll(props) {
//   const { children, window } = props;
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//     target: window ? window() : undefined,
//   });

//   return children
//     ? React.cloneElement(children, {
//         elevation: trigger ? 4 : 0,
//       })
//     : null;
// }

// export default function Appbar(props) {
//   const navigate = useNavigate();
//   const cart = useSelector((state) => state.view.cart.length);
//   console.log(cart);

//   const [open1, setOpen1] = React.useState(false);

//   return (
//     <ElevationScroll {...props}>
//       <AppBar
//         sx={{
//           backgroundColor: "#fafafa",
//           padding: "10px 20px",
//           boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
//         }}
//       >
//         <Toolbar
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <Link to="/" style={{ textDecoration: "none" }}>
//             <Typography
//               level="h6"
//               sx={{
//                 color: "black",
//                 fontSize: "2rem",
//                 textDecoration: "none",
//                 fontWeight: "bold",
//               }}
//             >
//               Find Home
//             </Typography>
//           </Link>
//           <Box
//             sx={{
//               width: "500px",
//               display: "flex",
//               flexDirection: "row",
//               justifyContent: "space-evenly",
//               alignItems: "center",
//             }}
//           >
//             {cart ? (
//               <Badge
//                 badgeContent={cart}
//                 sx={{
//                   "& .MuiBadge-badge": {
//                     backgroundColor: "#333",
//                     color: "#fff",
//                     fontSize: "12px",
//                     padding: "4px 8px",
//                     borderRadius: "10px",
//                   },
//                 }}
//               >
//                 <DrawerBasic />
//               </Badge>
//             ) : (
//               <Button
//                 variant="plain"
//                 startDecorator={<ShoppingCartIcon />}
//                 sx={{
//                   color: "#333",
//                   fontSize: "16px",
//                   textTransform: "none",
//                 }}
//               >
//                 Cart
//               </Button>
//             )}

//             <Button
//               variant="outlined"
//               sx={{
//                 color: "#333",
//                 fontSize: "16px",
//                 textTransform: "none",
//                 borderColor: "#333",
//               }}
//             >
//               Login
//             </Button>
//             <Button
//               variant="contained"
//               sx={{
//                 color: "#fff",
//                 fontSize: "16px",
//                 textTransform: "none",
//                 backgroundColor: "#333",
//               }}
//             >
//               Sign Up
//             </Button>
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </ElevationScroll>
//   );
// }

// import * as React from "react";
// import { AppBar, Toolbar } from "@mui/material";
// import useScrollTrigger from "@mui/material/useScrollTrigger";
// import { Typography, Button, Box } from "@mui/joy";
// import Badge from "@mui/joy/Badge";
// import { useSelector } from "react-redux";
// import DrawerBasic from "./drawer";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// function ElevationScroll(props) {
//   const { children, window } = props;
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//     target: window ? window() : undefined,
//   });

//   return children
//     ? React.cloneElement(children, {
//         elevation: trigger ? 4 : 0,
//       })
//     : null;
// }

// export default function Appbar(props) {
//   const navigate = useNavigate();
//   const cart = useSelector((state) => state.view.cart.length);
//   console.log(cart);

//   const [open1, setOpen1] = React.useState(false);

//   return (
//     <ElevationScroll {...props}>
//       <AppBar
//         sx={{
//           backgroundColor: "#fafafa",
//         }}
//       >
//         <Toolbar
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-between",
//           }}
//         >
//           <Link to="/" style={{ textDecoration: "none" }}>
//             <Typography
//               level="h6"
//               sx={{ color: "black", fontSize: "2rem", textDecoration: "none" }}
//             >
//               Find Home
//             </Typography>
//           </Link>
//           <Box
//             sx={{
//               width: "500px",
//               display: "flex",
//               flexDirection: "row",
//               justifyContent: "space-evenly",
//             }}
//           >
//             {cart ? (
//               <Badge badgeContent={cart}>
//                 <DrawerBasic />
//               </Badge>
//             ) : (
//               <Button variant="plain" startDecorator={<ShoppingCartIcon />}>
//                 Cart
//               </Button>
//             )}

//             <Button>Login</Button>
//             <Button>Sign Up</Button>
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </ElevationScroll>
//   );
// }
