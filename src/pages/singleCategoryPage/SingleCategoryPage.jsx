import React from 'react';
import './singleCategoryPage.css';
import { useParams } from 'react-router';
import VideoCard from '../../components/videoCard/VideoCard';

const SingleCategoryPage = () => {

    const { categoryName } = useParams();
    const videosData = JSON.parse(localStorage.getItem('videosData'))

    const selectedCategoryVideo = videosData.filter(({category}) => category === categoryName);

  return (
    <div className='singe-category-div'>
        <h3 className='page-heading'>{categoryName}</h3>
        <div className='categories-div'>
            {
                selectedCategoryVideo.map((video) => <VideoCard key={video._id} videoData={video} />)
            }
        </div>
    </div>
  )
}

export default SingleCategoryPage
