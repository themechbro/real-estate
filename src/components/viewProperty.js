import React from "react";
import { Typography, IconButton } from "@mui/material";
import { Input, Textarea, Grid, Box, Button } from "@mui/joy";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import { useSelector } from "react-redux";
import { Container } from "@mui/system";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch } from "react-redux";
import { addtoCart } from "../Redux/Actions/actions";
import { useNavigate } from "react-router-dom";

export default function ViewProperty() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const property = useSelector((state) => state.view.viewProperty);

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 10 }}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="back"
        onClick={() => navigate("/")}
      >
        <ArrowBackIcon />
      </IconButton>
      <Box sx={{ padding: 4 }}>
        <Grid container spacing={2}>
          {/* Left Side */}
          <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
              {property.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {property.address}
            </Typography>

            <Box sx={{ mt: 2 }}>
              <img
                src={property.imageLg} // replace with your actual image url or import it
                alt={property.name}
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </Box>

            <Box sx={{ display: "flex", mt: 2, gap: 2 }}>
              <IconButton>
                <BedIcon />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  {property.bedrooms}
                </Typography>
              </IconButton>
              <IconButton>
                <BathtubIcon />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  {property.bathrooms}
                </Typography>
              </IconButton>
              <IconButton>
                <SquareFootIcon />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  {property.surface}
                </Typography>
              </IconButton>
            </Box>

            <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.6 }}>
              {property.description}
            </Typography>
          </Grid>

          {/* Right Side */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <img
                src={property.agent.image} // replace with actual image url or import it
                alt={property.agent.name}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  marginRight: 16,
                }}
              />
              <Box>
                <Typography variant="h6">{property.agent.name}</Typography>
                <Typography
                  variant="body2"
                  color="error"
                  sx={{ cursor: "pointer" }}
                >
                  View Listings
                </Typography>
              </Box>
            </Box>

            <Box
              component="form"
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Input placeholder="Name" required sx={{ borderRadius: "8px" }} />
              <Input
                placeholder="Email"
                required
                sx={{ borderRadius: "8px" }}
              />
              <Input
                placeholder="Phone"
                required
                sx={{ borderRadius: "8px" }}
              />
              <Textarea
                placeholder="Message"
                required
                sx={{ borderRadius: "8px" }}
                minRows={4}
              />

              <Button
                variant="outlined"
                sx={{ mt: 2, borderRadius: "8px" }}
                color="danger"
              >
                Send Message
              </Button>
              <Button
                startDecorator={<ShoppingCartIcon />}
                variant="outlined"
                sx={{ mt: 2, borderRadius: "8px" }}
                onClick={() => dispatch(addtoCart(property))}
              >
                Add to Cart
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
