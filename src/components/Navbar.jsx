import React from "react";
import { Stack, Box, Typography, IconButton, Avatar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";

import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    px={{ xs: 2, md: 4 }}
    py={1.8}
    sx={{
      position: "sticky",
      top: 0,
      zIndex: 1100,
      background: "rgba(9, 12, 21, 0.85)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
    }}
  >
    {/* Brand Logo */}
    <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 40,
          height: 40,
          borderRadius: "12px",
          background: "linear-gradient(135deg, #ff1e56 0%, #ff5e62 100%)",
          boxShadow: "0 4px 20px rgba(255, 30, 86, 0.45)",
          mr: 1.5,
          transition: "transform 0.2s ease",
          "&:hover": { transform: "scale(1.05)" },
        }}
      >
        <PlayArrowRoundedIcon sx={{ color: "#fff", fontSize: 28 }} />
      </Box>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Typography
          variant="h6"
          fontWeight={800}
          sx={{
            fontFamily: "'Outfit', sans-serif",
            letterSpacing: "-0.5px",
            lineHeight: 1,
            color: "#ffffff",
          }}
        >
          Stream<span style={{ color: "#ff1e56" }}>Wave</span>
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "#64748b",
            fontSize: "0.68rem",
            fontWeight: 600,
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          Studio
        </Typography>
      </Box>
    </Link>

    {/* Centered Search Bar */}
    <Box sx={{ flex: { xs: 1, md: "0 1 520px" }, mx: { xs: 2, md: 0 } }}>
      <SearchBar />
    </Box>

    {/* Right Action Icons */}
    <Stack direction="row" alignItems="center" spacing={{ xs: 1, sm: 1.5 }}>
      <Button
        variant="contained"
        startIcon={<VideoCallOutlinedIcon />}
        sx={{
          display: { xs: "none", sm: "flex" },
          borderRadius: "24px",
          background: "rgba(255, 255, 255, 0.06)",
          color: "#ffffff",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          textTransform: "none",
          fontWeight: 600,
          fontSize: "0.85rem",
          px: 2,
          "&:hover": {
            background: "rgba(255, 255, 255, 0.12)",
            borderColor: "rgba(255, 255, 255, 0.25)",
          },
        }}
      >
        Create
      </Button>

      <IconButton
        sx={{
          color: "#94a3b8",
          background: "rgba(255, 255, 255, 0.04)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          width: 40,
          height: 40,
          position: "relative",
          "&:hover": { color: "#ffffff", background: "rgba(255, 255, 255, 0.08)" },
        }}
      >
        <NotificationsNoneRoundedIcon fontSize="small" />
        <Box
          sx={{
            position: "absolute",
            top: 9,
            right: 10,
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#ff1e56",
            boxShadow: "0 0 8px #ff1e56",
          }}
        />
      </IconButton>

      <Avatar
        alt="User Profile"
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        sx={{
          width: 38,
          height: 38,
          border: "2px solid #ff1e56",
          boxShadow: "0 0 12px rgba(255, 30, 86, 0.3)",
          cursor: "pointer",
          transition: "transform 0.2s ease",
          "&:hover": { transform: "scale(1.05)" },
        }}
      />
    </Stack>
  </Stack>
);

export default Navbar;
