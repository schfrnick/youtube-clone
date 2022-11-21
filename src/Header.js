import React, { useState } from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search'
import VideoCallIcon from '@mui/icons-material/VideoCall'
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AvatarIcon from '@mui/icons-material/AccountCircleOutlined';

import { Link } from "react-router-dom";



function Header( ){
    
    const [inputSearch, setInputSearch]=useState("");
    return(
        <div className="Header" >
            <div className='header__logo'>
                <MenuIcon/>
                <Link to="/"><img className="header__logo" src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-970-80.jpg.webp" alt=""></img>
            </Link>
                
            </div>
            
            
            <div className='header__input'>
                <input 
                onChange={(e) => setInputSearch(e.target.value)}  
                value={inputSearch} 
                placeholder="Search" 
                type="text"
                />
                <Link  to={`/search/${inputSearch}` } >
                    
                    <SearchIcon className="header__inputButton"/>
                </Link>
                
                
            </div>


            <div className='header__icons'>            
                <VideoCallIcon className='header__icon' />
                <AppsIcon className='header__icon' />
                <NotificationsIcon className='header__icon' />
                <AvatarIcon alt="schfrnick" src="https://avatars.githubusercontent.com/u/33338151?s=96&v=4" />
            </div>

        </div>
    );
}

export default Header;