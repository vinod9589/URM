import React from "react";
import Card from "../component/card/Card"; // Ensure correct path to your BasicCard component
import { Box, Grid, Paper, Typography } from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HistoryIcon from "@mui/icons-material/History"; // Example for history
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import Table from "../component/table/Table";
function Home() {
  const cardData = [
    {
      title: "Userlist",
      historyCount: 100,
      backgroundColor: "lightblue",
      iconColor: "white",
      buttonText: "Learn More",
      icon: ViewListIcon,
    },
    {
      title: "Todo",
      historyCount: 200,
      backgroundColor: "lightgreen",
      iconColor: "white",
      buttonText: "Explore",
      icon: CheckCircleIcon,
    },
    {
      title: "Activity",
      historyCount: 300,
      backgroundColor: "lightyellow",
      iconColor: "white",
      buttonText: "Discover",
      icon: HistoryIcon,
    },
    {
      title: "History",
      historyCount: 400,
      backgroundColor: "lightcoral",
      iconColor: "white",
      buttonText: "Get Started",
      icon: WorkHistoryIcon,
    },
  ];

  return (
    <>
      <Grid
        container
        sx={{
          backgroundColor: "rgb(240,242,245)",
          justifyContent: "space-around",
        }}
      >
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={2} key={index}>
            <Paper
              sx={{
                padding: 1,
                textAlign: "start",
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
            >
              <Card
                title={card.title}
                historyCount={card.historyCount}
                backgroundColor={card.backgroundColor}
                iconColor={card.iconColor}
                buttonText={card.buttonText}
                icon={card.icon}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
      {/* ---------------------user table data------------------------ */}

      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Typography variant="h6">
          {" "}
          <strong>User List</strong>{" "}
        </Typography>
        <Grid marginTop={1} container>
          <Grid textAlign={"center"} item xs={12} md={8}>
            <Table />
          </Grid>
          <Grid
            sx={{
              border: "1px solid black",
            }}
            item
            xs={12}
            md={4}
           
          
          >
            Email show
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home;
