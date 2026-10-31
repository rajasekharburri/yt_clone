import React from "react";
import { Stack, Box, Typography } from "@mui/material";

import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction={{ xs: "row", md: "column" }}
    sx={{
      overflowY: "auto",
      overflowX: { xs: "auto", md: "hidden" },
      height: { xs: "auto", md: "calc(100vh - 90px)" },
      gap: 0.8,
      py: 1,
      pr: { md: 1 },
      "&::-webkit-scrollbar": {
        width: "4px",
      },
    }}
  >
    <Box sx={{ display: { xs: "none", md: "block" }, px: 1.5, pb: 1 }}>
      <Typography
        variant="caption"
        sx={{
          color: "#64748b",
          fontWeight: 700,
          letterSpacing: "1.2px",
          textTransform: "uppercase",
          fontSize: "0.7rem",
        }}
      >
        Discover
      </Typography>
    </Box>

    {categories.map((category) => {
      const isSelected = category.name === selectedCategory;
      return (
        <button
          key={category.name}
          className={`category-btn ${isSelected ? "active" : ""}`}
          onClick={() => setSelectedCategory(category.name)}
        >
          <Box
            component="span"
            sx={{
              display: "flex",
              alignItems: "center",
              color: isSelected ? "#ffffff" : "#ff1e56",
              transition: "transform 0.2s ease",
            }}
          >
            {category.icon}
          </Box>
          <span>{category.name}</span>
        </button>
      );
    })}
  </Stack>
);

export default Sidebar;
