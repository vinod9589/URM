import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1, padding: 3}}>
      <Grid container>
        <Grid textAlign={"center"} item xs={12} md={6}>
          <Typography>
            © 2025, made with ♥ by <strong>Vinod Rajput</strong> for a better
            web.
          </Typography>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
          item
          xs={12}
          md={6}
        >
          <Typography>UserList</Typography>
          <Typography>Todo</Typography>
          <Typography>Activity</Typography>
          <Typography>History</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
