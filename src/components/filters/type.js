import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";

const types = ["Any Type", "House", "Apartament"];

export default function Type({ selectedType, setSelectedType }) {
  return (
    <Box sx={{ mx: 1, minWidth: 220 }}>
      <FormControl fullWidth>
        <InputLabel id="type-label">Type</InputLabel>
        <Select
          labelId="type-label"
          id="type-select"
          value={selectedType}
          onChange={(event) => setSelectedType(event.target.value)}
          input={<OutlinedInput label="Type" />}
          sx={{
            backgroundColor: "white",
            borderRadius: 1,
            border: "1px solid #ccc",
            "&:hover": {
              borderColor: "#1976d2",
            },
          }}
        >
          {types.map((c) => (
            <MenuItem key={c} value={c}>
              {c}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
