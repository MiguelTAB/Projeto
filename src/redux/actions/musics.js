import { ADD_MORE_MUSICS , INITIAL_MUSICS , CHANGE_MUSIC_PAGE, SEARCH_MUSICS } from "../actionsTypes"

export const getInitialMusics = () => {
    return {
        type: INITIAL_MUSICS
    }
};

export const addMoreMusics = () => {
    return {
        type: ADD_MORE_MUSICS
    }
};

/*export const changeMusicPage = () => {
    return {
        type: CHANGE_MUSIC_PAGE,
        page: iNumberOfPage ? iNumberOfPage : 1,
    }
};
*/

export const changeMusicPage = iNumberOfPage => ({
    type: CHANGE_MUSIC_PAGE,
    page: iNumberOfPage ? iNumberOfPage : 1,
});

export const searchMusics = stringToSearch => ({
    type: SEARCH_MUSICS,
    stringToSearch: stringToSearch ? stringToSearch : "",
});