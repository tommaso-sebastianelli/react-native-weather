import { combineReducers } from 'redux';
import searchSlice from './search/slice'

export default combineReducers({
    search: searchSlice.reducer
});