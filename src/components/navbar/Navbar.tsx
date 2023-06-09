import React, { useState, useEffect } from "react";
import { AppBar, Box, Hidden, Toolbar, Typography } from "@mui/material";
import { NavbarButton } from "./NavbarButton";
import Content from "./Content";

export default function Navbar() {
  const [isConnected, setIsConnected] = useState(false);
  const [open, setOpen] = useState(false);
  const defaultSelectedValue = ""; // Utilisez une valeur par défaut appropriée

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        id="nav"
        sx={{
          backgroundColor: "transparent",
          backdropFilter: "blur(8px)",
          boxShadow: "none",
          height: "90px",
          py: "10px",
        }}
      >
        <Toolbar>
          <img src="/scrapEAT.svg" alt="logo" />
          <Hidden smDown>
            <Typography
              variant="h2"
              sx={{
                flexGrow: 1,
                pl: 2,
              }}
            >
              scrapEAT
            </Typography>
          </Hidden>
          <NavbarButton
            variant={isConnected ? "menu" : "login"}
            sx={{
              backgroundColor: "secondary.main",
              px: 2,
              py: 1,
              borderRadius: "4px",
              position: "absolute",
              right: "0",
              marginRight: "20px",
              border: `2px solid white`,

              ":hover ": {
                transform: "scale(1.1)",
                transition: "all 0.3s ease",
                backgroundColor: "secondary.main",
              },
            }}
            open={open}
            onOpen={handleOpen}
            onClose={handleClose}
          >
            <Typography variant="body2">
              {isConnected ? "menu" : "login"}
            </Typography>
          </NavbarButton>
        </Toolbar>
      </AppBar>
      {/* <Content
        open={open}
        onClose={handleClose}
        isConnected={isConnected}
        selectedValue={defaultSelectedValue}
      /> */}
    </Box>
  );
}
