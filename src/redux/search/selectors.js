import { createSelector } from 'reselect';

const loading = state => state.search.loading
const data = state => state.search.data
const searchValue = state => state.search.searchValue

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