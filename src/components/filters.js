import * as react from "react";
import Autocomplete from "@mui/joy/Autocomplete";
import { Grid } from "@mui/joy";
import Paper from "@mui/material/Paper";

export default function Filters() {
  const pricerange = [
    { label: "Price Range (any)", value: "Price Range (any)" },
    { label: "100000 - 130000", value: "100000 - 130000" },
    { label: "130000 - 160000", value: "130000 - 160000" },
    { label: "160000 - 190000", value: "160000 - 190000" },
    { label: "190000 - 220000", value: "190000 - 220000" },
    { label: "10000 - 30000", value: "10000 - 30000" },
    { label: "30000 - 40000", value: "30000 - 40000" },
  ];
  const type = [
    { label: "Type (any)", value: "Type (any)" },
    { label: "Apartment", value: "Apartment" },
    { label: "House", value: "House" },
  ];

  const location = [
    { label: "Locations (Any)", value: "Locations (Any)" },
    { label: "Nairobi", value: "Nairobi" },
    { label: "Mombasa", value: "Mombasa" },
  ];

  return (
    <Paper sx={{ p: 2 }} elevation={3}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Autocomplete
            placeholder="Choose Price range"
            options={pricerange}
            sx={{ width: 300 }}
            defaultValue={pricerange[0].value}
          />
        </Grid>
        <Grid item xs={4}>
          <Autocomplete
            placeholder="Choose Price range"
            options={type}
            sx={{ width: 300 }}
            defaultValue={type[0].value}
          />
        </Grid>
        <Grid item xs={4}>
          <Autocomplete
            placeholder="Choose Price range"
            options={location}
            sx={{ width: 300 }}
            defaultValue={location[0].value}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
