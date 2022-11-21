import React from "react";

import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home"
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "./Sidebar.css"



function Sidebar(){
    return(

        <div className="sidebar"> 

            

            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={WhatshotOutlinedIcon} title="Trending" />
            <SidebarRow Icon={SubscriptionsOutlinedIcon} title="Subscription" />
            <hr></hr>

            <SidebarRow Icon={VideoLibraryIcon} title="Library" />
            <SidebarRow Icon={HistoryIcon} title="History" />
            <SidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
            <SidebarRow Icon={ThumbUpOffAltIcon} title="Liked Videos" />
            <SidebarRow Icon={ExpandMoreIcon} title="Show More" />
            <hr />
        </div>
    );
}

export default Sidebar