import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, Box, Stack, Avatar } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  const videoTitle = snippet?.title || demoVideoTitle;
  const channelName = snippet?.channelTitle || demoChannelTitle;
  const thumbnailUrl =
    snippet?.thumbnails?.high?.url ||
    snippet?.thumbnails?.medium?.url ||
    demoThumbnailUrl;

  return (
    <Card
      className="modern-video-card"
      sx={{
        width: { xs: "100%", sm: "320px", md: "310px" },
        backgroundColor: "var(--bg-card)",
        borderRadius: "16px",
        border: "1px solid var(--border-subtle)",
        overflow: "hidden",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.35)",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Thumbnail with hover zoom & overlay badges */}
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Box className="thumbnail-container" sx={{ position: "relative", width: "100%", pt: "56.25%" }}>
          <Box
            component="img"
            className="thumbnail-img"
            src={thumbnailUrl}
            alt={videoTitle}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          {/* Gradient overlay for contrast */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "40%",
              background: "linear-gradient(to top, rgba(9, 12, 21, 0.85) 0%, transparent 100%)",
            }}
          />

          {/* Quality badge */}
          <Box
            sx={{
              position: "absolute",
              bottom: 8,
              right: 8,
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              backdropFilter: "blur(4px)",
              color: "#ffffff",
              fontSize: "0.7rem",
              fontWeight: 700,
              px: 1,
              py: 0.2,
              borderRadius: "4px",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              letterSpacing: "0.5px",
            }}
          >
            HD
          </Box>
        </Box>
      </Link>

      {/* Card Content & Metadata */}
      <CardContent sx={{ p: 2, flexGrow: 1, backgroundColor: "transparent" }}>
        <Stack direction="row" spacing={1.5} alignItems="flex-start">
          {/* Channel Avatar placeholder */}
          <Link to={snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
            <Avatar
              sx={{
                width: 36,
                height: 36,
                bgcolor: "rgba(255, 30, 86, 0.2)",
                color: "#ff1e56",
                fontWeight: 700,
                fontSize: "0.9rem",
                border: "1.5px solid rgba(255, 30, 86, 0.4)",
              }}
            >
              {channelName ? channelName.charAt(0).toUpperCase() : "Y"}
            </Avatar>
          </Link>

          <Box sx={{ flex: 1, minWidth: 0 }}>
            {/* Video Title */}
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
              <Typography
                variant="subtitle2"
                fontWeight={700}
                sx={{
                  color: "#ffffff",
                  lineHeight: 1.35,
                  fontSize: "0.92rem",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  mb: 0.6,
                  transition: "color 0.2s ease",
                  "&:hover": { color: "#ff1e56" },
                }}
              >
                {videoTitle}
              </Typography>
            </Link>

            {/* Channel Name & Verified Icon */}
            <Link to={snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#94a3b8",
                    fontWeight: 600,
                    fontSize: "0.78rem",
                    "&:hover": { color: "#ffffff" },
                  }}
                >
                  {channelName}
                </Typography>
                <CheckCircleRoundedIcon sx={{ fontSize: 13, color: "#38bdf8" }} />
              </Stack>
            </Link>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
