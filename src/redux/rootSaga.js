import { spawn } from 'redux-saga/effects';
import homeSagas from './home/sagas'
import forecastsSagas from './forecasts/sagas'

export default function* rootSaga() {
    yield spawn(homeSagas),
    yield spawn(forecastsSagas)
}