import { createSelector } from 'reselect';

const loading = state => state.forecasts.loading
const error = state => state.forecasts.error
const data = state => state.forecasts.data

export const loadingSelector = createSelector(
    loading,
    val => val
)

export const errorSelector = createSelector(
    error,
    val => val
)

export const dataSelector = createSelector(
    data,
    val => ({ ...val, daily: val.daily.slice(0, 6) })
)