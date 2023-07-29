import { createContext, useState } from "react";

export const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {

    const [playlistData, setPlaylistData] = useState([]);

    return <PlaylistContext.Provider value={{ playlistData, setPlaylistData }}>{children}</PlaylistContext.Provider>
}