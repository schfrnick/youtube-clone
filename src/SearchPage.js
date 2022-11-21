import React from 'react';
import ChannelRow from "./ChannelRow"
import VideoRow from "./VideoRow"
import TuneIcon from '@mui/icons-material/Tune';
import "./SearchPage.css";

function SearchPage(){

    return(

        <div className='searchPage'>
            <div className='searchPage__filter'>
                <TuneIcon/>
                <h2> FILTER </h2>
            
            </div>
            <hr />

            <ChannelRow
            image="https://c4.wallpaperflare.com/wallpaper/864/120/856/futurama-philip-j-fry-memes-money-wallpaper-preview.jpg"
            channel = "THE FUTURE"
            verified
            subs = "4"
            noOfVideos = {57}
            descriptions="find out where you thought you knew we were going"
            />
            <hr />
            <VideoRow 
                views={10000}
                title="What do you normally do while im gone?"
                description="spongebob101  and the things patrik does out of despiration"
                noOfVideos={1005}
                subs = {148}
                channel="Patrik Finds the way"
                verified
                timestamp="2 months ago"
                image="https://c-fa.cdn.smule.com/rs-s24/arr/e7/c9/8fea1cf7-9500-4102-9c8c-85fc98b31a21.jpg"
            />
        </div>
    )
}

export default SearchPage