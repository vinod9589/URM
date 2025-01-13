import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

const columns: GridColDef[] = [
  { field: "fristname", headerName: "FRIST NAME", width: 180 },
  { field: "lastname", headerName: "LAST NAME", width: 180 },
  { field: "email", headerName: "EMAIL", width: 150, align: "center", headerAlign: "center" },
  { field: "mobilenumber", headerName: "MOBILE NUMBER", width: 200, align: "center", headerAlign: "center", renderCell: renderCompletion },
];

const rows = [
  { id: 1, fristname: "fvf", lastname: "3 Members", email: "$14,000", mobilenumber: "hu"},
  { id: 2, fristname: "Add Progress Track", lastname: "1 Member", email: "$3,000", mobilenumber: 40 },
  { id: 3, fristname: "Fix Platform Errors", lastname: "2 Members", email: "Not set", mobilenumber: 100 },
  { id: 4, fristname: "Launch our Mobile App", lastname: "3 Members", email: "$20,500", mobilenumber: 100 },
  { id: 5, fristname: "Add the New Pricing Page", lastname: "1 Member", email: "$500", mobilenumber: 30 },
  { id: 6, fristname: "Redesign New Online Shop", lastname: "2 Members", email: "$2,000", mobilenumber: "ssss" },
];

function renderCompletion(params: any) {
  return (
    <Box width="100%" position="relative">

      <Typography
        variant="caption"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
        }}
      >
        
      </Typography>
    </Box>
  );
}

export default function ProjectTable() {
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 6, 
  });

  return (
    <Box
      sx={{
        height: 500,
        Width: "50%",
        backgroundColor: "white",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        padding: 2,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Projects
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pagination
        autoHeight
        sx={{
          "& .MuiDataGrid-footerContainer": {
            marginTop: "16px", 
          },
        }}
      />
    </Box>
  );
}
