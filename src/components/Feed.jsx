import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Chip } from "@mui/material";
import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
      .catch((err) => console.error(err));
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
      {/* Sidebar navigation */}
      <Box
        sx={{
          height: { xs: "auto", md: "calc(100vh - 80px)" },
          borderRight: { md: "1px solid rgba(255, 255, 255, 0.08)" },
          borderBottom: { xs: "1px solid rgba(255, 255, 255, 0.08)", md: "none" },
          px: { xs: 1.5, md: 2 },
          pt: 1.5,
          minWidth: { md: "230px" },
          position: { md: "sticky" },
          top: "76px",
          backgroundColor: "rgba(9, 12, 21, 0.5)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Box sx={{ display: { xs: "none", md: "block" }, pt: 2, pb: 1, px: 1 }}>
          <Typography
            variant="caption"
            sx={{ color: "#475569", fontSize: "0.72rem", display: "block" }}
          >
            © 2026 StreamWave Studio
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "#334155", fontSize: "0.68rem" }}
          >
            Cloud Native DevOps Edition
          </Typography>
        </Box>
      </Box>

      {/* Main Feed Content */}
      <Box
        p={{ xs: 2, md: 3 }}
        sx={{
          overflowY: "auto",
          height: "calc(100vh - 80px)",
          flex: 1,
        }}
      >
        {/* Category Header */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={3}
          flexWrap="wrap"
          gap={1.5}
        >
          <Box>
            <Stack direction="row" alignItems="center" spacing={1} mb={0.5}>
              <Chip
                icon={<WhatshotRoundedIcon style={{ color: "#ff1e56" }} />}
                label="Explore Trending"
                size="small"
                sx={{
                  background: "rgba(255, 30, 86, 0.12)",
                  color: "#ff1e56",
                  border: "1px solid rgba(255, 30, 86, 0.25)",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                }}
              />
            </Stack>
            <Typography
              variant="h4"
              fontWeight={800}
              sx={{
                fontFamily: "'Outfit', sans-serif",
                color: "#ffffff",
                letterSpacing: "-0.5px",
              }}
            >
              {selectedCategory}{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #ff1e56 0%, #ff5e62 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Videos
              </span>
            </Typography>
          </Box>
        </Stack>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
