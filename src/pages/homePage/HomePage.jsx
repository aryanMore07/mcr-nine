import React from 'react';
import './homePage.css';
import { useNavigate } from 'react-router';

const HomePage = () => {

  const navigate = useNavigate();
  const categoriesData = JSON.parse(localStorage.getItem('categoriesData'))

  return (
    <div className='home-div'>
      <h3 className='page-heading'>Categories</h3>
      <div className='categories-div'>

        {
          categoriesData.map((video) => {
            const { _id, thumbnail, /* src, */ category } = video;
            return (
              <div key={_id} className='category' onClick={() => {
                navigate(`/category/${category}`)
              }}>
                <div>
                  <img src={thumbnail} alt={category} />
                  <h4><b>{category}</b></h4>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default HomePage;
