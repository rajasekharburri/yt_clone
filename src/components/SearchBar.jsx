import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={onhandleSubmit}
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: "999px",
        background: isFocused ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.04)",
        border: "1px solid",
        borderColor: isFocused ? "#ff1e56" : "rgba(255, 255, 255, 0.1)",
        boxShadow: isFocused ? "0 0 20px rgba(255, 30, 86, 0.25)" : "none",
        px: 2,
        py: 0.5,
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <SearchRoundedIcon
        sx={{
          color: isFocused ? "#ff1e56" : "#64748b",
          fontSize: 22,
          mr: 1.5,
          transition: "color 0.2s ease",
        }}
      />

      <input
        className="search-input-field"
        placeholder="Search videos, channels, topics..."
        value={searchTerm}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {searchTerm && (
        <IconButton
          size="small"
          onClick={() => setSearchTerm("")}
          sx={{ color: "#94a3b8", p: 0.5, mr: 0.5 }}
        >
          <ClearRoundedIcon sx={{ fontSize: 18 }} />
        </IconButton>
      )}

      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          alignItems: "center",
          justifyContent: "center",
          px: 1,
          py: 0.2,
          borderRadius: "6px",
          backgroundColor: "rgba(255, 255, 255, 0.06)",
          color: "#64748b",
          fontSize: "0.75rem",
          fontWeight: 700,
          border: "1px solid rgba(255, 255, 255, 0.08)",
          userSelect: "none",
        }}
      >
        /
      </Box>
    </Box>
  );
};

export default SearchBar;
