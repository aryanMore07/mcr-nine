import { createContext, useEffect, useState } from "react";
import { categories } from "../data/categoriesData/categoriesData";
import { videos } from "../data/allVideosData/allVideosData";

export const VideoContext = createContext();

export const VideoProvider = ({children}) => {

    const initialCategoryState = () => {
        const category = localStorage.getItem('categoriesData')
        return category ? JSON.parse(category) : [];
    }

    const initialVideoState = () => {
        const video = localStorage.getItem('videosData')
        return video ? JSON.parse(video) : [];
    }

    const [categoriesData, setCategoriesData] = useState(initialCategoryState);
    const [videosData, setVideosData] = useState(initialVideoState)

    useEffect(() => {
        localStorage.setItem('categoriesData', JSON.stringify(categoriesData))
        localStorage.setItem('videosData', JSON.stringify(videosData))
    }, [categoriesData, videosData])

    return <VideoContext.Provider value={{ setCategoriesData, setVideosData }}>{children}</VideoContext.Provider>
}