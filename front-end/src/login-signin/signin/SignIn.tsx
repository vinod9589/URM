import React from "react";
import { Box, Grid, Paper, Typography, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { url } from "inspector";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function SignIn() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid marginTop={1} container>
          <Grid  textAlign={"center"} item xs={12} md={12}>
            <Box
              sx={{
                backgroundPosition: "center center",
                height: "250px",
                background: "center",
                position: "relative",
                borderRadius: "15px",
                backgroundSize:"cover",
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
                  borderRadius:"10px",
                  position:"absolute",
                  top: -100,
                }}
                textAlign={"center"}
                item
                xs={12}
                md={3}
                sm={6}
               
                padding={2}
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
                    label="User Name"
                    variant="standard"
                  />
                  <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                  />
                  <TextField
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    textAlign: "center",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <Checkbox {...label} defaultChecked />
                  <Typography>I agree the Terms and Conditions</Typography>
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
                  Already have an account? <strong>Sign In</strong>{" "}
                </Typography>
              </Grid>
                  <Box
              sx={{
                marginTop: "10px",
                position: "absolute",
                top:-150,
                background:
                  "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
                color: "white",
                borderRadius: 2,
              }}
            >
              <Box padding={3}>
                <Typography sx={{ fontWeight: "bold" }} variant="h5">
                  Join us today
                </Typography>
                <Typography sx={{ marginTop: "10px", fontWeight: "none" }}>
                  Enter your email and password to <br /> register
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

export default SignIn;
