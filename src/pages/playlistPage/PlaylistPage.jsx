import React from 'react';
import './playlistPage.css';

const PlaylistPage = () => {
  return (
    <div className='playlist-div'>
      <h3 className='page-heading'>Playlist</h3>
      <div className='playlistVideos'>
        {/* {
          filteredVideosData.length === 0 ?
            (<h1 className='page-heading'>No videos found ;)</h1>) :
            filteredVideosData.map((video) => <VideoCard key={video._id} videoData={video} />)
        } */}
      </div>
    </div>
  )
}

export default PlaylistPage;
