import { createContext, useState } from "react";
import { categories } from "../data/categoriesData/categoriesData";
import { videos } from "../data/allVideosData/allVideosData";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {

    const [categoriesData, setCategoriesData] = useState(categories);
    const [videosData, setVideosData] = useState(videos)

    return <VideoContext.Provider value={{ videosData, categoriesData, setCategoriesData, setVideosData }}>{children}</VideoContext.Provider>
}