import React from "react";
import { Grid, Paper, TextField, Box } from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";

function BasicGrid() {
  return (
    <Grid  container sx={{ backgroundColor: "rgb(240,242,245)"  }}>
      {/* Left side - Image */}
      <Grid  item xs={12} sm={6} md={6}>
        <Paper sx={{ padding: 1, textAlign: "start", backgroundColor: "transparent",  boxShadow: "none", }}>
          <img
         
          height={"50px"}
            
            src="./urmimg.png"
            alt="Logo"
          />
        </Paper>
      </Grid>

      {/* Right side - Search Field and Icons */}
      <Grid  item xs={12} sm={6} md={6}>
        <Paper
          sx={{
            padding: 1,
            textAlign: "end",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        >
          {/* Search Field */}
          <TextField
            id="outlined-search-input"
            label="Search here"
            type="text"
            autoComplete="off"
            sx={{
              width: "100%", // Ensure text field takes full width
              maxWidth: "350px", // Set max width to keep it reasonable
              marginRight: "20px", // Add some spacing between the text field and icons
            }}
          />

          {/* Icons Box */}
          <Box
            sx={{
              display: "flex",
              gap: "20px", // Space between the icons
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "none",
            }}
          >
            <AccountCircleRoundedIcon />
            <SettingsRoundedIcon />
            <NotificationsRoundedIcon />
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default BasicGrid;
