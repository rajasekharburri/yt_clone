import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from "./components";

const App = () => (
  <BrowserRouter>
    <Box
      sx={{
        backgroundColor: "var(--bg-dark)",
        minHeight: "100vh",
        color: "#ffffff",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Ambient background glow accents */}
      <Box
        className="ambient-blob"
        sx={{
          top: -100,
          right: "15%",
          width: "450px",
          height: "450px",
          background: "radial-gradient(circle, rgba(255, 30, 86, 0.12) 0%, transparent 70%)",
        }}
      />
      <Box
        className="ambient-blob"
        sx={{
          bottom: "20%",
          left: -100,
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(66, 133, 244, 0.08) 0%, transparent 70%)",
        }}
      />

      <Navbar />

      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
