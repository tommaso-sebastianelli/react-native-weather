import { all, put, select, take } from 'redux-saga/effects';
import * as RootNavigation from '../../../rootNavigation';
import { currentLocationSelector } from '../home/selectors';
import { action as homeActions } from '../home/slice';
import { actions } from './slice';
import { location, locationDate } from '../../api'

function* setLocationFlow() {
    while (true) {
        yield take(homeActions.setLocation.type);
        yield call(() => RootNavigation.navigate('Forecasts'));
        yield put(actions.start());
    }
}

function* forecastsFlow() {
    while (true) {
        yield take(actions.start.type);
        yield getData();
    }
}

function* getData() {
    const { woeid } = yield select(currentLocationSelector);
    const now = new Date();
    try {
        const { data } = yield all([location(woeid), locationDate(now.getFullYear(), now.getMonth() + 1, now.getDate())]);
        console.log(data);
        console.log('get forecast success');
        yield put(actions.success({ data: data }));
    } catch (e) {
        console.log('get forcast failure');
        yield put(actions.failure({ error: 'an error occurred' }));
    }
}

export default function* forecastsSaga() {
    yield all([
        forecastsFlow(),
        setLocationFlow()
    ])
}