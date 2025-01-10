import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { TextField, Typography } from "@mui/material";
import "./style.css"
const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "mobilenumber",
    headerName: "Mobile Number",
    type: "number",
    width: 200,
    editable: true,
  },

  
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataGridDemo() {
  return (
    <Box 
      sx={{ 
        height: 420, 
        // width: "100%", 
        backgroundColor: "white",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
        borderRadius: "8px", 
  
  
      }}
    >
      <Box 
        sx={{ 
          display: "flex", 
          flexDirection: "row", 
          justifyContent: "space-between", 
          alignItems: "center", 
      
          
        
        }}
      >
      
        <img 
          
          width={60}  
          src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_3767867.jpg" 
          alt="User Icon" 
        />
  
      
        <TextField 
          id="standard-basic" 
          label="Search" 
          variant="standard" 
          sx={{ width: 200,marginRight:1 }} 
        
        />
      </Box>
      <DataGrid 
        rows={rows} 
        columns={columns} 
     
        sx={{ border: "none" }} 
      />
    </Box>
  );
}
