import { Box, Typography, Grid } from "@mui/joy";
import * as React from "react";

export default function Hero() {
  return (
    <Grid
      container
      spacing={2}
      sx={{ padding: 10, paddingTop: 30, height: "100%" }}
    >
      <Grid item xs={6} className="text">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography level="h1">Rent Your Dream House With Us.</Typography>
          <Typography
            level="title-lg"
            sx={{
              wordWrap: "break-word", // Add this property
            }}
          >
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6} className="image">
        <img
          className="hero-img"
          src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          style={{ borderRadius: "10px" }}
        ></img>
      </Grid>
    </Grid>
  );
}
