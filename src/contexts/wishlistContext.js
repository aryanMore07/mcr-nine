import { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {

    const initialState = () => {
        const watchLater = localStorage.getItem('watchLater');
        return watchLater ? JSON.parse(watchLater) : [];
    } 

    const [watchLater, setwatchLater] = useState(initialState);

    const addToWishlist = (video) => {
        setwatchLater([...watchLater, video]);
        // localStorage.setItem('watchLater', JSON.stringify(watchLater));
    }

    const removeFromWishlist = (videoId) => {
        setwatchLater(watchLater.filter(({ _id }) => _id !== videoId));
    }

    useEffect(() => {
        localStorage.setItem('watchLater', JSON.stringify(watchLater));
    }, [watchLater])

    return <WishlistContext.Provider value={{ watchLater, addToWishlist, removeFromWishlist }}>{children}</WishlistContext.Provider>
}