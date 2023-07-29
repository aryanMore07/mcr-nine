import { createContext, useEffect, useState } from "react";
import { categories } from "../data/categoriesData/categoriesData";
import { videos } from "../data/allVideosData/allVideosData";

export const VideoContext = createContext();

export const VideoProvider = ({children}) => {

    const [categoriesData, setCategoriesData] = useState(categories);
    const [videosData, setVideosData] = useState(videos)

    useEffect(() => {
        localStorage.setItem('categoriesData', JSON.stringify(categoriesData))
        localStorage.setItem('videosData', JSON.stringify(videosData))
    }, [categoriesData, videosData])

    return <VideoContext.Provider value={{ setCategoriesData, setVideosData }}>{children}</VideoContext.Provider>
}