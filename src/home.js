import { Box, Typography } from "@mui/joy";
import * as React from "react";
import Hero from "./components/hero";
import List from "./components/list";

export default function Home() {
  return (
    <Box>
      <Hero />
      <Box
        sx={{
          padding: 2,
        }}
      >
        <List />
      </Box>
    </Box>
  );
}
