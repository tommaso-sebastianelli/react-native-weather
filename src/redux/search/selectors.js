import { createSelector } from 'reselect';

const loading = state => state.search.loading
const data = state => state.search.data

export const loadingSelector = createSelector(
    loading,
    val => val
)


export const dataSelector = createSelector(
    data,
    val => val
)