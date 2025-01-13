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
import Testing from "./Testing"
import { Flex } from "antd";
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

      <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}    >
      
      <Grid sx={{width:"90%"}} container spacing={4} justifyContent="center" alignItems="center" marginTop={1}>
  <Grid sx={{border:"1px solid black"}} item xs={12} md={8}>
    {/* <Table /> */}
    <Testing />
  </Grid>
  <Grid item xs={12} md={4} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}  >
    <TaskSidebar />
  </Grid>
</Grid>




        {/* <Grid  container gap={2} >
          <Grid textAlign={"center"} item xs={12} lg={7}>
            <Table />
          </Grid>
          <Grid sx={{ backgroundColor: "white " }} item xs={12} lg={3}>
            <TaskSidebar />
          </Grid>
        </Grid> */}
      </Box>
      <Box sx={{ padding: 2, backgroundColor: "#f9f9f9" }}>
      <Grid
        container 
        spacing={2} 
        justifyContent="center" 
        alignItems="flex-start" // Center items at the top of the container
        marginTop={2}
      >
        {/* Left Section (Table) */}
        <Grid
          xs={12} 
          md={8} 
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box sx={{ width: "90%", maxWidth: "1000px" }}>
            <Table />
          </Box>
        </Grid>

        {/* Right Section (TaskSidebar) */}
        <Grid
          xs={12} 
          md={4} 
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box sx={{ width: "90%", maxWidth: "350px" }}>
            <TaskSidebar />
          </Box>
        </Grid>
      </Grid>
    </Box>






    
    </>
  );
}

export default Home;
