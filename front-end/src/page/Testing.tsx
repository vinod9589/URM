import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

const columns: GridColDef[] = [
  { field: "companies", headerName: "COMPANIES", width: 250 },
  { field: "members", headerName: "MEMBERS", width: 150 },
  { field: "budget", headerName: "BUDGET", width: 150, align: "center", headerAlign: "center" },
  { field: "completion", headerName: "COMPLETION", width: 200, align: "center", headerAlign: "center", renderCell: renderCompletion },
];

const rows = [
  { id: 1, companies: "Material UI XD Version", members: "3 Members", budget: "$14,000", completion: 70 },
  { id: 2, companies: "Add Progress Track", members: "1 Member", budget: "$3,000", completion: 40 },
  { id: 3, companies: "Fix Platform Errors", members: "2 Members", budget: "Not set", completion: 100 },
  { id: 4, companies: "Launch our Mobile App", members: "3 Members", budget: "$20,500", completion: 100 },
  { id: 5, companies: "Add the New Pricing Page", members: "1 Member", budget: "$500", completion: 30 },
  { id: 6, companies: "Redesign New Online Shop", members: "2 Members", budget: "$2,000", completion: 50 },
];

function renderCompletion(params: any) {
  return (
    <Box width="100%" position="relative">
      <LinearProgress variant="determinate" value={params.value} />
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
        {params.value}%
      </Typography>
    </Box>
  );
}

export default function ProjectTable() {
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 6, // Default page size
  });

  return (
    <Box
      sx={{
        height: 500,
        width: "50%",
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
            marginTop: "16px", // Adds space at the bottom for footer
          },
        }}
      />
    </Box>
  );
}
