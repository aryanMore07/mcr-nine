import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { PlaylistContext, PlaylistProvider } from './contexts/PlaylistContext';
import { VideoProvider } from './contexts/VideoContext';
import { WishlistContext, WishlistProvider } from './contexts/wishlistContext';
export { PlaylistContext }
export { WishlistContext }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <VideoProvider>
        <PlaylistProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </PlaylistProvider>
      </VideoProvider>
    </Router>
  </React.StrictMode>
);