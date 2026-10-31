import React from "react";
import { Box, CardContent, CardMedia, Typography, Stack, Button } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => {
  const channelId = channelDetail?.id?.channelId || channelDetail?.id;
  const channelTitle = channelDetail?.snippet?.title;
  const thumbnail = channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture;
  const subscriberCount = channelDetail?.statistics?.subscriberCount;

  return (
    <Box
      sx={{
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "100%", sm: "320px", md: "310px" },
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--border-subtle)",
        p: 2.5,
        margin: "auto",
        marginTop,
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: "rgba(255, 255, 255, 0.2)",
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <Link
        to={`/channel/${channelId}`}
        style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "#fff",
            p: 1,
            width: "100%",
          }}
        >
          <Box sx={{ position: "relative", mb: 2 }}>
            <CardMedia
              image={thumbnail}
              alt={channelTitle}
              sx={{
                borderRadius: "50%",
                height: "140px",
                width: "140px",
                border: "2px solid #ff1e56",
                boxShadow: "0 0 25px rgba(255, 30, 86, 0.3)",
              }}
            />
          </Box>

          <Stack direction="row" alignItems="center" spacing={0.5} mb={0.5}>
            <Typography variant="h6" fontWeight={700} sx={{ color: "#ffffff" }}>
              {channelTitle}
            </Typography>
            <CheckCircleRoundedIcon sx={{ fontSize: 16, color: "#38bdf8" }} />
          </Stack>

          {subscriberCount && (
            <Typography sx={{ fontSize: "0.85rem", fontWeight: 600, color: "#94a3b8", mb: 2 }}>
              {parseInt(subscriberCount).toLocaleString("en-US")} Subscribers
            </Typography>
          )}

          <Button
            variant="contained"
            size="small"
            sx={{
              borderRadius: "20px",
              background: "linear-gradient(135deg, #ff1e56 0%, #ff5e62 100%)",
              textTransform: "none",
              fontWeight: 700,
              fontSize: "0.82rem",
              px: 3,
              py: 0.7,
              boxShadow: "0 4px 15px rgba(255, 30, 86, 0.4)",
              "&:hover": { filter: "brightness(1.1)" },
            }}
          >
            Visit Channel
          </Button>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
