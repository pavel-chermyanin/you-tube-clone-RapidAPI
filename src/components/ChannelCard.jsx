import React from "react";
import { Typography, Box, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const ChannelCard = ({ channelDetail, marginTop }) => {
  // console.log(channelDetail);
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: 0,
        height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop,
        overflow:'hidden'
      }}
    >
      <Link
        // sx={{ height: "100%" }}
        to={`/channel/${channelDetail?.id?.channelId}`}
      >
        <Box
          sx={{
            border: "1px solid #fff",
            borderRadius: "50%",
            width: "250px",
            height: "250px",
            backgroundColor:'#131111'
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              gap: "10px",
              height: "-webkit-fill-available",
              textAlign: "center",
            }}
          >
            <AccountBoxIcon sx={{ fontSize: "70px" }} />
            <Typography variant="h6">
              {channelDetail?.snippet?.title}
              <CheckCircle sx={{ fontSize: 16, color: "gray", ml: "5px" }} />
            </Typography>
            {channelDetail?.statistics?.subscriberCount && (
              <Typography>
                {parseInt(
                  channelDetail?.statistics?.subscriberCount,
                  10
                ).toLocaleString()}{" "}
                Subscribers
              </Typography>
            )}
            {/* <CardMedia
            alt={channelDetail?.snippet?.title}
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            sx={{ width: 150, height: 150, borderRadius: "50%" }}
          /> */}
          </CardContent>
        </Box>
      </Link>
    </Box>
  );
};

export default ChannelCard;
