import { createSelector } from 'reselect';

const loading = state => state.home.loading
const data = state => state.home.data
const searchValue = state => state.home.searchValue
const location = state => state.home.location

export const loadingSelector = createSelector(
    loading,
    val => val
)

export const dataSelector = createSelector(
    data,
    val => val && val.slice(0, 3)
)

export const searchValueSelector = createSelector(
    searchValue,
    val => val
)

export const currentLocationSelector = createSelector(
    location,
    val => val
)