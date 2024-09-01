import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";

const range = [
  "Any Range",
  "100000 - 130000",
  "130000 - 160000",
  "160000 - 190000",
  "190000 - 220000",
  "10000 - 30000",
  "30000 - 40000",
];

export default function Price({ selectedPrice, setSelectedPrice }) {
  return (
    <Box sx={{ mx: 1, minWidth: 220 }}>
      <FormControl fullWidth>
        <InputLabel id="price-label">Price Range</InputLabel>
        <Select
          labelId="price-label"
          id="price-select"
          value={selectedPrice}
          onChange={(event) => setSelectedPrice(event.target.value)}
          input={<OutlinedInput label="Price Range" />}
          sx={{
            backgroundColor: "white",
            borderRadius: 1,
            border: "1px solid #ccc",
            "&:hover": {
              borderColor: "#1976d2",
            },
          }}
        >
          {range.map((c) => (
            <MenuItem key={c} value={c}>
              {c}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
