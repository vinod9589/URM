import React from "react";
import { Box, Typography } from "@mui/material";
import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";
import FilterListIcon from '@mui/icons-material/FilterList';
function TaskSidebar() {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Box
        sx={{
          marginTop: "12px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>Task</Typography>
        <Box>
          <Dropdown>
            <MenuButton><FilterListIcon/></MenuButton>
            <Menu>
              <MenuItem>To Do</MenuItem>
              <MenuItem>In Progress</MenuItem>
              <MenuItem>Completed</MenuItem>
            </Menu>
          </Dropdown>
        </Box>
      </Box>
      {/* -------------------list------------------------- */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          mt: 5,
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Box
            sx={{
              backgroundColor: "red",
              borderRadius: "50%",
              width: "35px",
              height: "35px",
            }}
          ></Box>
        </Box>
        <Box>
          <Box>
            <Typography sx={{ fontWeight: "bold" }}>
              $2400, Design changes
            </Typography>
            <Typography  sx={{fontSize:"13px"}}>22 DEC 7:20 PM</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          mt: 5,
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Box
            sx={{
              backgroundColor: "red",
              borderRadius: "50%",
              width: "35px",
              height: "35px",
            }}
          ></Box>
        </Box>
        <Box>
          <Box>
            <Typography sx={{ fontWeight: "bold" }}>
              $2400, Design changes
            </Typography>
            <Typography  sx={{fontSize:"13px"}}>22 DEC 7:20 PM</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          mt: 5,
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Box
            sx={{
              backgroundColor: "red",
              borderRadius: "50%",
              width: "35px",
              height: "35px",
            }}
          >
            
          </Box>
        </Box>
        <Box>
          <Box>
            <Typography sx={{ fontWeight: "bold" }}>
              $2400, Design changes
            </Typography>
            <Typography  sx={{fontSize:"13px"}}>22 DEC 7:20 PM</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          mt: 5,
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Box
            sx={{
              backgroundColor: "red",
              borderRadius: "50%",
              width: "35px",
              height: "35px",
            }}
          ></Box>
        </Box>
        <Box>
          <Box>
            <Typography sx={{ fontWeight: "bold" }}>
              $2400, Design changes
            </Typography>
            <Typography sx={{fontSize:"13px"}} >22 DEC 7:20 PM</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TaskSidebar;
