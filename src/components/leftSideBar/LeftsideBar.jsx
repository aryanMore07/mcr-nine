import React from 'react';
import './leftsidebarPage.css';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

const LeftsideBar = () => {
  return (
    <div>
        <ul className='ul-element'>
            <NavLink to='/' className='navlink'><li className='li-element' ><HomeIcon /> <span className='span-tag'> Home</span></li></NavLink>
            <NavLink to='/explore' className='navlink'><li className='li-element' ><ExploreIcon /> <span className='span-tag'> Explore</span></li></NavLink>
            <NavLink to='/playlist' className='navlink'><li className='li-element' ><PlaylistAddIcon /> <span className='span-tag'> Playlist</span></li></NavLink>
            <NavLink to='/watchlater' className='navlink'><li className='li-element' ><WatchLaterIcon /> <span className='span-tag'> Watch Later</span></li></NavLink>
        </ul>
    </div>
  )
}

export default LeftsideBar
