import { combineReducers } from 'redux';
import homeSlice from './home/slice'
import forecastsSlice from './forecasts/slice'

export default combineReducers({
    home: homeSlice.reducer,
    forecasts: forecastsSlice.reducer
});