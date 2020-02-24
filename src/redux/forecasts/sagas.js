import { all, put, select, take, call } from 'redux-saga/effects';
import * as RootNavigation from '../../../rootNavigation';
import { currentLocationSelector } from '../home/selectors';
import { actions as homeActions } from '../home/slice';
import { actions } from './slice';
import { location, locationDate } from '../../api'

function* setLocationFlow() {
    while (true) {
        yield take(homeActions.setLocation.type);
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
        const daily = (yield locationDate(woeid, now)).data;
        const weekly = (yield location(woeid)).data;
        const data = {
            daily,
            weekly
        };
        console.log(data);
        console.log('get forecast success');
        yield put(actions.success({ data: data }));
        yield call(() => RootNavigation.navigate('Forecasts'));
    } catch (e) {
        console.log(e);
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