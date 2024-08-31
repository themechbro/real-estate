import { Box } from "@mui/joy";
import * as React from "react";
import { housesData } from "../data/data";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Stack,
} from "@mui/material";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import { Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import { viewProperty } from "../Redux/Actions/actions";
import { Link } from "react-router-dom";

export default function List() {
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(viewProperty(item));
    console.log("Dispatched", item);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "space-evenly",
      }}
    >
      {housesData.map((item) => {
        return (
          <Paper
            elevation={4}
            sx={{
              boxShadow: 3,
              margin: 2,
              borderRadius: 4,
              cursor: "pointer",
              textDecoration: "none",
            }}
            key={item.id}
            onClick={() => handleClick(item)}
            component={Link}
            to={`/property/${item.id}`}
          >
            <Card sx={{ width: 345 }}>
              <CardMedia
                component="img"
                height="240"
                image={item.imageLg} // Replace with your image source
                alt="Property"
                sx={{
                  borderRadius: "16px",
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              />
              <CardContent>
                <Stack direction="row" spacing={1}>
                  <Chip label={item.type} color="primary" />
                  <Chip label={item.country} color="error" />
                </Stack>
                <Typography variant="h6" component="div" sx={{ mt: 1 }}>
                  {item.address}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mt: 1,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <BedIcon />
                    <Typography>{item.bedrooms}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <BathtubIcon />
                    <Typography>{item.bathrooms}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <AspectRatioIcon />
                    <Typography>{item.surface} sq ft</Typography>
                  </Box>
                </Box>
                <Typography variant="h5" sx={{ color: "red", mt: 1 }}>
                  {item.price}
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        );
      })}
    </Box>
  );
}
