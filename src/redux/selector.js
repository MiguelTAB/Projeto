
/*export const getMusicsToDisplay = (store) => 
    (store && store.musics && store.musics.musics) ? store.musics.musics : [];
*/
export const getMusicsToDisplay = (store) =>
     store && store.musics && store.musics.musicsDisplayed ? store.musics.musicsDisplayed : [];

export const getPaginationInformation = (store) => 
     store && store.musics && store.musics.pagination ? store.musics.pagination : {
          elementsPerPage: 5,
          currentPage: 0,
          numberOfAvailableMusics: 0
     }

// FAVOURITES

export const getFavourites = (store) =>
     store && store.favourites.favourites ? store.favourites.favourites : [];

export const checkIfFavourite= (store, trackId) => {
     console.log(trackId);
     if (store && store.favourites.favourites &&  store.favourites.favourites.length > 0){
          let favouritesIndex = store.favourites.favourites.map(music => music.trackId).indexOf(trackId);
          return favouritesIndex > -1;
     } else {
          return false;
     }
}
