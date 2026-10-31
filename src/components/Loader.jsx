import React from "react";
import { Box, Skeleton, Stack } from "@mui/material";

const Loader = () => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: {
        xs: "repeat(1, 1fr)",
        sm: "repeat(auto-fill, minmax(280px, 1fr))",
        md: "repeat(auto-fill, minmax(300px, 1fr))",
      },
      gap: 3,
      width: "100%",
      p: 1,
    }}
  >
    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
      <Box
        key={item}
        sx={{
          backgroundColor: "var(--bg-card)",
          borderRadius: "16px",
          border: "1px solid var(--border-subtle)",
          overflow: "hidden",
          p: 2,
        }}
      >
        <Skeleton
          variant="rounded"
          height={170}
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.05)",
            borderRadius: "12px",
            mb: 2,
          }}
          animation="wave"
        />
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Skeleton
            variant="circular"
            width={38}
            height={38}
            sx={{ bgcolor: "rgba(255, 255, 255, 0.05)" }}
            animation="wave"
          />
          <Box sx={{ flex: 1 }}>
            <Skeleton
              variant="text"
              width="90%"
              height={22}
              sx={{ bgcolor: "rgba(255, 255, 255, 0.05)" }}
              animation="wave"
            />
            <Skeleton
              variant="text"
              width="60%"
              height={18}
              sx={{ bgcolor: "rgba(255, 255, 255, 0.05)" }}
              animation="wave"
            />
          </Box>
        </Stack>
      </Box>
    ))}
  </Box>
);

export default Loader;
