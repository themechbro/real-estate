import { Box, Typography, Grid } from "@mui/joy";
import * as React from "react";

export default function Hero() {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: { xs: 2, sm: 4, md: 10 }, // Responsive padding
        paddingTop: { xs: 10, sm: 20, md: 30 }, // Responsive padding top
        height: "100%",
        flexDirection: { xs: "column", sm: "row" }, // Stack items on small screens
      }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: { xs: "center", sm: "left" }, // Center text on small screens
        }}
      >
        <Typography level="h1" sx={{ fontSize: { xs: "2rem", sm: "3rem" } }}>
          Rent Your Dream House With Us.
        </Typography>
        <Typography
          level="title-lg"
          sx={{
            wordWrap: "break-word",
            fontSize: { xs: "0.875rem", sm: "1rem" }, // Adjust font size
            mt: 2, // Add margin top
            lineHeight: { xs: 1.4, sm: 1.6 }, // Adjust line height
          }}
        >
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Hero"
          style={{
            borderRadius: "10px",
            maxWidth: "100%", // Ensure the image is responsive
            height: "auto",
          }}
        />
      </Grid>
    </Grid>
  );
}
