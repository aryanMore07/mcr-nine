import './App.css';
import HomePage from './pages/homePage/HomePage';
import ExplorePage from './pages/explorePage/ExplorePage';
import WatchlistPage from './pages/watchlatePage/WatchlistPage';
import { Route, Routes } from 'react-router';
import PlaylistPage from './pages/playlistPage/PlaylistPage';
import LeftsideBar from './components/leftSideBar/LeftsideBar';
import SingleCategoryPage from './pages/singleCategoryPage/SingleCategoryPage';

function App() {

  return (
    <div className="App">
      <div className='leftside-bar'>
        <LeftsideBar />
      </div>
      <div className='main-bar'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/explore' element={<ExplorePage />} />
          <Route path='/playlist' element={<PlaylistPage />} />
          <Route path='/watchlater' element={<WatchlistPage />} />
          <Route path='/category/:categoryName' element={<SingleCategoryPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
