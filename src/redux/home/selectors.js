import { createSelector } from 'reselect';

const loading = state => state.search.loading
const data = state => state.search.data
const searchValue = state => state.search.searchValue
const location = state => state.search.location

export const loadingSelector = createSelector(
    loading,
    val => val
)

export const dataSelector = createSelector(
    data,
    val => val
)

export const searchValueSelector = createSelector(
    searchValue,
    val => val
)

export const currentLocationSelector = createSelector(
    location,
    val => val
)