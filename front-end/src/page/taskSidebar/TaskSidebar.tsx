import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";
import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";
import FilterListIcon from "@mui/icons-material/FilterList";

function TaskSidebar() {
  const tasks = [
    { id: 1, title: "$2400, Design changes", date: "22 DEC 7:20 PM" },
    { id: 2, title: "New order #1832412", date: "21 DEC 11:00 PM" },
    { id: 3, title: "Server payments for April", date: "21 DEC 9:34 PM" },
    {
      id: 4,
      title: "New card added for order #4395133",
      date: "20 DEC 2:20 AM",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: 2,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        height:500,
        width:"100%"
      }}
    >
      <Box
        sx={{
          marginBottom: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Orders Overview
        </Typography>
        <Dropdown>
          <MenuButton>
            <FilterListIcon />
          </MenuButton>
          <Menu>
            <MenuItem>To Do</MenuItem>
            <MenuItem>In Progress</MenuItem>
            <MenuItem>Completed</MenuItem>
          </Menu>
        </Dropdown>
      </Box>

      <List>
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                width: "100%",
              }}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "red", width: 40, height: 40 }} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>
                    {task.title}
                  </Typography>
                }
                secondary={
                  <Typography
                    sx={{
                      fontSize: "13px",
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    {task.date}
                  </Typography>
                }
              />
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default TaskSidebar;
