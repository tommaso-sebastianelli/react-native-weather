import axios from 'axios';

const BASE_URL = 'https://www.metaweather.com';
const PATHS = {
    LOCATION_SEARCH: '/api/location/search/?query=',
    LOCATION: '/api/location/'
}
// Find a location
// /api/location/search/?query=(query)
const locationSearch = queryString => {
    const locationSearchUrl = `${BASE_URL}${PATHS.LOCATION_SEARCH}${queryString}`;
    return axios.get(locationSearchUrl);
}

// Location 6 day forecast
// /api/location/(woeid)/
const location = id => {
    const locationUrl = `${BASE_URL}${PATHS.LOCATION}${id}`;
    return axios.get(locationUrl);
}

// Location 3 chunk hour forecast
// /api/location/(woeid)/
const locationDate = (id, date) => {
    const locationUrl = `${BASE_URL}${PATHS.LOCATION}${id}/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    return axios.get(locationUrl);
}

export { locationSearch, location, locationDate }