import React, { useContext } from 'react';
import './videoCard.css';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import { WishlistContext } from '../../contexts/wishlistContext';

const VideoCard = ({ videoData }) => {


    const { _id, title, thumbnail, creator, views } = videoData;
    const { watchLater, addToWishlist, removeFromWishlist } = useContext(WishlistContext);

    const addedToWatchLater = (videoId) => watchLater.find(({ _id }) => _id === videoId);


    return (
        <div key={_id} className='video-div'>
            <div className='watchlaterBtn'>
                {
                    addedToWatchLater(_id) ?
                        (<WatchLaterIcon style={{color: '#1976d2'}} onClick={() => {
                            removeFromWishlist(_id);
                        }} />) :
                        (<WatchLaterOutlinedIcon style={{color: '#1976d2'}} onClick={() => {
                            addToWishlist(videoData);
                        }} />)
                }
            </div>
            <div>
                <img src={thumbnail} alt={title} />
            </div>
            <div>
                <p><b>{title}</b></p>
                <p style={{ color: '#a2a2a2', fontSize: '17px' }}>{views} | {creator}</p>
            </div>
        </div>
    )
}

export default VideoCard
