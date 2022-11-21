import { Avatar } from "@mui/material";
import React from "react";
import "./ChannelRow.css";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function ChannelRow({image,channel,verified,subs,noOfVideos,descriptions}) {
 return <div className="channelRow">

        <Avatar className="channelRow__logo" alt={channel} src={image} sx={{width:100, height: 100}} />
        <div className="channelRow__text">
            <h4>{channel} {verified && <CheckCircleOutlineIcon/>}</h4>
            <p>{subs} Subscribers | {noOfVideos} Videos</p>
            <p>{descriptions}</p>
        </div>

 </div>;
}

export default ChannelRow;