import React, { useState } from 'react';
import './explorePage.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import VideoCard from '../../components/videoCard/VideoCard';

const ExplorePage = () => {

  const [input, setInput] = useState('');
  const videosData = JSON.parse(localStorage.getItem('videosData'));

  const inputHandler = (event) => {
    setInput(event.target.value);
  }

  const filteredVideosData = videosData.filter(({ title }) => title.toLowerCase().includes(input.toLowerCase()));

  return (
    <div className='explore-div'>
      <h3 className='page-heading'>Explore</h3>
      <div>
        <Box
          sx={{
            padding: '0px 15px 0px 15px'
          }}
        >
          <TextField fullWidth label="Search video by title" id="fullWidth" value={input} onChange={inputHandler} />
        </Box>
      </div>
      <div className='videos-div'>
          { 
            filteredVideosData.length === 0 ?
            (<h1 className='page-heading'>No videos found ;)</h1>) :
            filteredVideosData.map((video) => <VideoCard key={video._id} videoData={video} /> )
          }
      </div>
    </div>
  )
}

export default ExplorePage
