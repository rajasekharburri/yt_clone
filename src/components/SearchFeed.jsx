import React, { useState, useEffect } from "react";
import { Typography, Box, Stack, Chip } from "@mui/material";
import { useParams } from "react-router-dom";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
      .catch((err) => console.error(err));
  }, [searchTerm]);

  return (
    <Box px={{ xs: 2, md: 5 }} py={3} minHeight="95vh">
      <Stack spacing={1} mb={3}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Chip
            icon={<SearchRoundedIcon style={{ color: "#ff1e56", fontSize: 16 }} />}
            label="Search Query"
            size="small"
            sx={{
              background: "rgba(255, 30, 86, 0.12)",
              color: "#ff1e56",
              border: "1px solid rgba(255, 30, 86, 0.25)",
              fontWeight: 700,
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
          Results for{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #ff1e56 0%, #ff5e62 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            "{searchTerm}"
          </span>
        </Typography>
      </Stack>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
