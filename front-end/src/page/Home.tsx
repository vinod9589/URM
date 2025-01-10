import React from "react";
import Card from "../component/card/Card"; // Ensure correct path to your BasicCard component
import { Box, Grid, Grid2, Paper, Typography } from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HistoryIcon from "@mui/icons-material/History"; // Example for history
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import Table from "../component/table/Table";
import EmailIcon from "@mui/icons-material/Email";
import TaskSidebar from "./taskSidebar/TaskSidebar";
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
      title: "Email",
      historyCount: 300,
      backgroundColor: "lightyellow",
      iconColor: "white",
      buttonText: "Discover",
      icon: EmailIcon,
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

      <Box  >
        <Grid2 marginTop={1} container spacing={2} >
          <Grid2 size={{md:7,xs:12}}>
          <Table />
          </Grid2>
          <Grid2   size={{md:3,xs:12}}>
          <TaskSidebar />
          </Grid2>
        </Grid2>
        {/* <Grid  container gap={2} >
          <Grid textAlign={"center"} item xs={12} lg={7}>
            <Table />
          </Grid>
          <Grid sx={{ backgroundColor: "white " }} item xs={12} lg={3}>
            <TaskSidebar />
          </Grid>
        </Grid> */}
      </Box>
    </>
  );
}

export default Home;
