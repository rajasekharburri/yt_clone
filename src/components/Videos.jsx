import React from "react";
import { Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns:
          direction === "column"
            ? "1fr"
            : {
                xs: "repeat(1, 1fr)",
                sm: "repeat(auto-fill, minmax(280px, 1fr))",
                md: "repeat(auto-fill, minmax(300px, 1fr))",
              },
        gap: { xs: 2.5, sm: 3 },
        width: "100%",
      }}
    >
      {videos.map((item, idx) => (
        <Box key={idx} sx={{ display: "flex", justifyContent: "center" }}>
          {item.id?.videoId && <VideoCard video={item} />}
          {item.id?.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Box>
  );
};

export default Videos;
