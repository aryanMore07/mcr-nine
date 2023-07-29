import React, { useContext } from 'react';
import './watchlistPage.css';
import VideoCard from '../../components/videoCard/VideoCard';
import { WishlistContext } from '../../contexts/wishlistContext';

const WatchlistPage = () => {

  const { watchLater } = useContext(WishlistContext);

  return (
    <div className='watchlater'>
      <h3 className='page-heading'>Watch Later</h3>
      <div className='watchlater-video-div'>
        {
          watchLater.length === 0 ?
            (<h1 className='page-heading'>Nothing added to Watch later</h1>) :
            watchLater.map((video) => <VideoCard key={video._id} videoData={video} />)
        }
      </div>
    </div>
  )
}

export default WatchlistPage
