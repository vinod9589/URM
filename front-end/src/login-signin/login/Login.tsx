import React from "react";
import { Box, Grid, Paper, Typography, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { url } from "inspector";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Login() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid marginTop={1} container>
          <Grid textAlign={"center"} item xs={12} md={12}>
            <Box
              sx={{
                backgroundPosition: "center center",
                height: "250px",
                background: "center",
                position: "relative",
                borderRadius: "15px",
                backgroundSize: "cover",
                backgroundImage:
                  'url("https://demos.creative-tim.com/material-dashboard-react/static/media/bg-sign-up-cover.30c5950b22e74f0d82ba.jpeg")',
              }}
            ></Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem",
                transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <Grid
                sx={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  position: "absolute",
                  top: -100,
                }}
                textAlign={"center"}
                item
                xs={12}
                md={3}
                sm={6}
                padding={4}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "132px",
                    gap: 2,
                  }}
                >
                  <TextField
                    id="standard-basic"
                    label="Email"
                    variant="outlined"
                  />
                  <TextField
                    id="standard-basic"
                    label="Password"
                    variant="outlined"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "start",
                    textAlign: "center",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <Checkbox {...label} defaultChecked />
                  <Typography>Remember me</Typography>
                </Box>

                <Box
                  sx={{
                    backgroundColor: "rgb(56,130,235)",
                    marginTop: "30px",
                    borderRadius: "10px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  padding={1}
                >
                  SIGN IN
                </Box>
                <Typography sx={{ marginTop: "35px" }}>
                  {" "}
                  Don't have an account? <strong> Sign up</strong>{" "}
                </Typography>
              </Grid>
              <Box
                sx={{
                  marginTop: "10px",
                  position: "absolute",
                  top: -150,
                  background:
                    "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
                  color: "white",
                  borderRadius: 2,
                }}
              >
                <Box padding={2}>
                  <Typography
                    sx={{ fontWeight: "bold", marginTop: "10px" }}
                    variant="h5"
                  >
                    Sign in
                  </Typography>
                  <Typography sx={{ marginTop: "10px", fontWeight: "none" }}>
                    Enter your email and password to <br /> login
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Login;
