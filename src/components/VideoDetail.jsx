import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import {
  Typography,
  Box,
  Stack,
  Button,
  Avatar,
  IconButton,
  Chip,
  Snackbar,
  Alert,
} from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";

import { Videos, Loader } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))
      .catch((err) => console.error(err));

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
      .catch((err) => console.error(err));
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle, description, publishedAt },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setToastOpen(true);
  };

  const parsedLikes = likeCount ? parseInt(likeCount, 10) : 0;
  const currentLikes = isLiked ? parsedLikes + 1 : parsedLikes;

  return (
    <Box minHeight="95vh" px={{ xs: 2, md: 4 }} py={3}>
      <Stack direction={{ xs: "column", lg: "row" }} spacing={3}>
        {/* Main Video & Details Column */}
        <Box flex={1}>
          {/* Responsive 16:9 Player container */}
          <Box
            sx={{
              position: "relative",
              pt: "56.25%",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(255, 30, 86, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
              width="100%"
              height="100%"
              style={{ position: "absolute", top: 0, left: 0 }}
            />
          </Box>

          {/* Video Title */}
          <Typography
            variant="h5"
            fontWeight={800}
            sx={{
              color: "#ffffff",
              mt: 2.5,
              mb: 2,
              fontFamily: "'Outfit', sans-serif",
              lineHeight: 1.3,
            }}
          >
            {title}
          </Typography>

          {/* Channel Bar & Action Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            gap={2}
            pb={2.5}
            borderBottom="1px solid rgba(255, 255, 255, 0.08)"
          >
            {/* Channel Info */}
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Link to={`/channel/${channelId}`}>
                <Avatar
                  sx={{
                    width: 44,
                    height: 44,
                    bgcolor: "rgba(255, 30, 86, 0.2)",
                    color: "#ff1e56",
                    fontWeight: 700,
                    border: "2px solid #ff1e56",
                  }}
                >
                  {channelTitle ? channelTitle.charAt(0).toUpperCase() : "C"}
                </Avatar>
              </Link>
              <Box>
                <Link to={`/channel/${channelId}`}>
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Typography
                      variant="subtitle1"
                      fontWeight={700}
                      sx={{ color: "#ffffff", "&:hover": { color: "#ff1e56" } }}
                    >
                      {channelTitle}
                    </Typography>
                    <CheckCircleRoundedIcon sx={{ fontSize: 15, color: "#38bdf8" }} />
                  </Stack>
                </Link>
                <Typography variant="caption" sx={{ color: "#94a3b8" }}>
                  Official Channel
                </Typography>
              </Box>

              <Button
                variant={isSubscribed ? "outlined" : "contained"}
                onClick={() => setIsSubscribed(!isSubscribed)}
                sx={{
                  ml: 2,
                  borderRadius: "20px",
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  px: 2.5,
                  background: isSubscribed
                    ? "rgba(255, 255, 255, 0.08)"
                    : "linear-gradient(135deg, #ff1e56 0%, #ff5e62 100%)",
                  color: "#ffffff",
                  border: isSubscribed ? "1px solid rgba(255, 255, 255, 0.2)" : "none",
                  boxShadow: isSubscribed ? "none" : "0 4px 15px rgba(255, 30, 86, 0.35)",
                  "&:hover": {
                    background: isSubscribed
                      ? "rgba(255, 255, 255, 0.15)"
                      : "linear-gradient(135deg, #ff1e56 0%, #ff5e62 100%)",
                    filter: "brightness(1.1)",
                  },
                }}
              >
                {isSubscribed ? "Subscribed" : "Subscribe"}
              </Button>
            </Stack>

            {/* Interaction Buttons (Like, Share, Save) */}
            <Stack direction="row" spacing={1} alignItems="center">
              <Button
                variant="outlined"
                onClick={() => setIsLiked(!isLiked)}
                startIcon={isLiked ? <ThumbUpRoundedIcon /> : <ThumbUpOutlinedIcon />}
                sx={{
                  borderRadius: "20px",
                  background: isLiked ? "rgba(255, 30, 86, 0.15)" : "rgba(255, 255, 255, 0.05)",
                  color: isLiked ? "#ff1e56" : "#ffffff",
                  borderColor: isLiked ? "#ff1e56" : "rgba(255, 255, 255, 0.1)",
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  "&:hover": {
                    background: "rgba(255, 30, 86, 0.2)",
                    borderColor: "#ff1e56",
                  },
                }}
              >
                {currentLikes ? currentLikes.toLocaleString() : "Like"}
              </Button>

              <Button
                variant="outlined"
                onClick={handleShare}
                startIcon={<ShareRoundedIcon />}
                sx={{
                  borderRadius: "20px",
                  background: "rgba(255, 255, 255, 0.05)",
                  color: "#ffffff",
                  borderColor: "rgba(255, 255, 255, 0.1)",
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.1)",
                    borderColor: "rgba(255, 255, 255, 0.25)",
                  },
                }}
              >
                Share
              </Button>

              <IconButton
                sx={{
                  color: "#94a3b8",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  "&:hover": { color: "#ffffff", background: "rgba(255, 255, 255, 0.1)" },
                }}
              >
                <BookmarkBorderRoundedIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>

          {/* Description & Stats Box */}
          <Box
            sx={{
              mt: 2.5,
              p: 2.5,
              borderRadius: "16px",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center" mb={1.5} flexWrap="wrap">
              <Chip
                icon={<VisibilityRoundedIcon style={{ color: "#38bdf8", fontSize: 16 }} />}
                label={`${parseInt(viewCount || 0, 10).toLocaleString()} views`}
                size="small"
                sx={{
                  background: "rgba(56, 189, 248, 0.1)",
                  color: "#38bdf8",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                }}
              />
              {publishedAt && (
                <Typography variant="caption" sx={{ color: "#94a3b8", fontWeight: 600 }}>
                  Published {new Date(publishedAt).toLocaleDateString()}
                </Typography>
              )}
            </Stack>

            <Typography
              variant="body2"
              sx={{
                color: "#cbd5e1",
                whiteSpace: "pre-line",
                lineHeight: 1.6,
                maxHeight: "180px",
                overflowY: "auto",
                "&::-webkit-scrollbar": { width: "4px" },
              }}
            >
              {description || "No description provided."}
            </Typography>
          </Box>
        </Box>

        {/* Related Videos Column */}
        <Box sx={{ width: { xs: "100%", lg: "380px" }, mt: { xs: 3, lg: 0 } }}>
          <Typography
            variant="h6"
            fontWeight={800}
            mb={2}
            sx={{
              fontFamily: "'Outfit', sans-serif",
              color: "#ffffff",
              letterSpacing: "-0.3px",
            }}
          >
            Up Next
          </Typography>
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>

      {/* Copy link snackbar feedback */}
      <Snackbar
        open={toastOpen}
        autoHideDuration={2500}
        onClose={() => setToastOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setToastOpen(false)}
          severity="success"
          sx={{
            background: "#182035",
            color: "#ffffff",
            border: "1px solid #ff1e56",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.6)",
          }}
        >
          Link copied to clipboard!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default VideoDetail;
