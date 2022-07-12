import { ADD_MORE_MUSICS , CHANGE_MUSIC_PAGE, INITIAL_MUSICS, SEARCH_MUSICS } from "../actionsTypes";
import { musics } from '../../resources/mockdata/musics';

const initialState = {
    numberOfItems: 0,
    //musics: [],
    musicsAll: [],
    musicsDisplayed: [],
    pagination: {
        elementsPerPage: 5,
        currentPage: 1,
        numberOfAvailableMusics: 0
        },
    nameString: ""
  }

 const reducer = (state = initialState, action) => {
    switch (action.type) {
      /*case ADD_MORE_MUSICS:
        const numberOfItemsToLoad = state.numberOfItems + 2;
        return {
            ...state,
            numberOfItems: state.numberOfItems + 2,
            musics: musics.slice(0, numberOfItemsToLoad)
        }*/
        case INITIAL_MUSICS:
          debugger;
        return {
            ...state,
            musics: musics,
        //    numberOfItems: 20,
        //    musics: musics.slice(0, initialItemsToLoad),
            musicsAll: musics,
            musicsDisplayed: musics.slice(0, state.pagination.elementsPerPage),
            nameString: "",
            pagination: {
                ...state.pagination,
                numberOfAvailableMusics: musics.length,
            },
        }
        case CHANGE_MUSIC_PAGE:
        const page = action.page;
        const resultOFPaging = changeMusicsToDisplay(state.musicsAll, page, state.pagination.elementsPerPage, state.nameString);
            return {
                ...state, 
                musicsDisplayed: resultOFPaging.musics,
                pagination: {
                    ...state.pagination,
                    numberOfAvailableMusics: resultOFPaging.numberOfAvailableMusics,
                    currentPage: page
                }
            }

        case SEARCH_MUSICS: 
            const stringToSearch = action.stringToSearch;
            const resultOFFiltering = changeMusicsToDisplay(state.musicsAll, state.pagination.currentPage, state.pagination.elementsPerPage, stringToSearch);
            return {
                ...state,
                nameString: stringToSearch,
                musicsDisplayed: resultOFFiltering.musics,
                pagination: {
                    ...state.pagination,
                    numberOfAvailableMusics: resultOFFiltering.numberOfAvailableMusics,
                    currentPage: resultOFFiltering.page
                }
            }
      default: return state
    }
  }

function changeMusicsToDisplay(musics, page, elementsPerPage, nameToSearch){
    let FilteredMusics = musics;
    let iNumberOfAvailableMusics = musics.length;
    debugger;
    if (nameToSearch){
        FilteredMusics = musics.filter(prod => prod.trackName.toLowerCase().includes(nameToSearch.toLowerCase()))
        iNumberOfAvailableMusics = FilteredMusics.length;
    }
    
    debugger;
    let iPage = ((page-1) * elementsPerPage) >= iNumberOfAvailableMusics ? 1 : page;
    FilteredMusics = FilteredMusics.slice((iPage - 1) * elementsPerPage , iPage * elementsPerPage);
    return {
        numberOfAvailableMusics: iNumberOfAvailableMusics,
        musics: FilteredMusics,
        page: iPage
    };
}

  export default reducer