import { combineReducers } from 'redux';
import favourites from './favourites';
import musics  from "./musics";

const rootReducer = combineReducers({
 musics,
 favourites
})

export default rootReducer