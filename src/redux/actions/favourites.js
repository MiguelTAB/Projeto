import { INITIAL_FAVOURITES, REMOVE_FAVOURITE, ADD_FAVOURITE } from "../actionsTypes";

export const getInitialFavourites = () => {
    return {
        type: INITIAL_FAVOURITES
    }
};

export const  addToFavourites  = addMusic => {
    return {
    type: ADD_FAVOURITE,
    musicToAdd: addMusic
    }
};

export const  removeFromFavourites  = trackId => {
    return {
    type: REMOVE_FAVOURITE,
    trackId: trackId
    }
};