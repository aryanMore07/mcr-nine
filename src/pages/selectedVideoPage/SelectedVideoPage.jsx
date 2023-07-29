import React, { useContext } from 'react';
import './selectedVideoPage.css';
import { useParams } from 'react-router';
import { VideoContext } from '../../contexts/VideoContext';
// import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import { WishlistContext } from '../../contexts/wishlistContext';
// import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined'; // Icon to remove from play list
// import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined'; // icon for add to playlist
import AddToPlaylistComponent from '../../components/addToPlaylistComponent/AddToPlaylistComponent';
import AddNoteComponent from '../../components/addNoteComponent/AddNoteComponent';
import VideoCard from '../../components/videoCard/VideoCard';


const SelectedVideoPage = () => {

    const { videoId } = useParams();
    const { videosData } = useContext(VideoContext);
    const { watchLater, addToWishlist, removeFromWishlist } = useContext(WishlistContext);

    const addedToWatchLater = (videoId) => watchLater.find(({ _id }) => _id === videoId);


    const selectedVideo = videosData.find(({ _id }) => _id === Number(videoId));

    const { _id, title, /* views, chips, */ creator, src } = selectedVideo;

    const recommendedVideos = videosData.filter((video) => video._id !== _id && video)

    return (
        <div className='selected-video-div'>

            <div className='selected-video-layout'>
                <div className='selected-video-heading'>
                    <div className='selected-video-div'>
                        <iframe width="100%" height="315" src={src} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div className='selected-secondary-div'>
                        <h3 className='page-heading'>{title} - {creator}</h3>
                        <div className='icons-div'>
                            {
                                addedToWatchLater(_id) ?
                                    (<span className='icons'><WatchLaterIcon onClick={() => {
                                        removeFromWishlist(_id);
                                    }} /></span>) :
                                    (<span className='icons'><WatchLaterOutlinedIcon onClick={() => {
                                        addToWishlist(selectedVideo);
                                    }} /></span>)
                            }
                            <span className='icons'><AddToPlaylistComponent /></span>
                            <span className='icons'><AddNoteComponent /></span>
                        </div>

                    </div>
                </div>
                <div className='recommend-videos'>
                    {
                        recommendedVideos.map((video) => <VideoCard videoData={video} />)
                    }
                </div>
            </div>

        </div>
    )
}

export default SelectedVideoPage
