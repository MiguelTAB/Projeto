import { ADD_FAVOURITE , REMOVE_FAVOURITE , INITIAL_FAVOURITES} from "../actionsTypes"

const initialState = {
    favourites: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_FAVOURITE:
            debugger;
            let musicToAdd = action.musicToAdd;
            let currentArrayOfFavourites = [...state.favourites];
            currentArrayOfFavourites.push(musicToAdd);
            return {
                favourites: currentArrayOfFavourites,
            };
        case REMOVE_FAVOURITE:
            const indexOfFavouriteToRemove = state.favourites.map(music => music.trackId).indexOf(action.trackId);
            currentArrayOfFavourites = [...state.favourites];
            if (indexOfFavouriteToRemove > -1) {
                currentArrayOfFavourites.splice(indexOfFavouriteToRemove, 1);
            }
            return {
                favourites: currentArrayOfFavourites,
            }; 
        default:
        return state;
        
       

    }
}