import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";

const locations = ["Any location", "Nairobi", "Mombasa"];

export default function Location({ selectedLocation, setSelectedLocation }) {
  return (
    <Box sx={{ mx: 1, minWidth: 220 }}>
      <FormControl fullWidth>
        <InputLabel id="location-label">Location</InputLabel>
        <Select
          labelId="location-label"
          id="location-select"
          value={selectedLocation}
          onChange={(event) => setSelectedLocation(event.target.value)}
          input={<OutlinedInput label="Location" />}
          sx={{
            backgroundColor: "white",
            borderRadius: 1,
            border: "1px solid #ccc",
            "&:hover": {
              borderColor: "#1976d2",
            },
          }}
        >
          {locations.map((c) => (
            <MenuItem key={c} value={c}>
              {c}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
