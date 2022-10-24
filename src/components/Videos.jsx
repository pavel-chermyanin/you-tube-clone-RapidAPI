import { Stack, Box } from "@mui/material";
import React from "react";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
      }}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {/* {item.id.channelId && <ChannelCard channelDetail={item} />} */}
        </Box>
      ))}
    </Box>
  );
};

export default Videos;
// direction="row" flexWrap="wrap" justifyContent="start" gap={2}
