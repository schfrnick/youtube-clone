import React from 'react';
import "./VideoCard.css";
import Avatar from '@mui/material/Avatar';

function VideoCard({ image, Title, Channel, Views, TimeStamp, ChannelImage}){
    return(
        <div className='videoCard'>

            <img className="videoCard__thumbnail" src={image} alt=""/>
            <div className='videoCard__info'>
            <Avatar 
                className="videoCard__avatar" 
                alt={Channel} 
                src={ChannelImage}></Avatar>
            <div className='videoCard__text'>
                <h4>{Title}</h4>
                <p>{Channel}</p>
                
                <p>{Views} • {TimeStamp}</p>
            </div>
            </div>
        </div>
    );
}

export default VideoCard;