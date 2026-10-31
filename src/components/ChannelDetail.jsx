import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
        setChannelDetail(data?.items[0]);

        const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
        setVideos(videosData?.items);
      } catch (err) {
        console.error(err);
      }
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      {/* Dynamic Modern Mesh Gradient Header Banner */}
      <Box
        sx={{
          height: { xs: "200px", md: "260px" },
          background:
            "linear-gradient(135deg, #090c15 0%, #1a1a2e 30%, #ff1e56 80%, #ff5e62 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(255, 30, 86, 0.4) 0%, transparent 60%)",
          }}
        />
      </Box>

      {/* Channel Profile Card overlapping banner */}
      <Box sx={{ position: "relative", zIndex: 10, px: 2, mb: 4 }}>
        <ChannelCard channelDetail={channelDetail} marginTop="-90px" />
      </Box>

      {/* Channel Videos Grid */}
      <Box px={{ xs: 2, md: 5 }} pb={5}>
        <Typography
          variant="h5"
          fontWeight={800}
          mb={3}
          sx={{
            fontFamily: "'Outfit', sans-serif",
            color: "#ffffff",
          }}
        >
          Uploaded{" "}
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
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
