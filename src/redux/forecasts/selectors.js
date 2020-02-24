import { createSelector } from 'reselect';

const error = state => state.forecasts.error
const data = state => state.forecasts.data

export const errorSelector = createSelector(
    error,
    val => val
)

export const dataSelector = createSelector(
    data,
    val => ({ ...val, daily: val.daily.slice(0, 6) })
)