import { Box, Typography, Link } from "@mui/joy";

export default function Error() {
  return (
    <Box
      sx={{
        padding: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography level="h3">
        The page you are looking for is either removed or not available to you.
        Go back to <Link href="/">home</Link>
      </Typography>
    </Box>
  );
}
