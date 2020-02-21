import { all, cancel, delay, put, select, take, throttle } from 'redux-saga/effects';
import { actions } from './slice';
import { searchValueSelector } from './selectors';
import { locationSearch } from '../../api'

function* searchFlow() {
    while (true) {
        const task = yield throttle(500, actions.start.type, getData);
        yield take(actions.clear.type);
        yield cancel(task);
        yield put(actions.clear());
    }
}

function* getData() {
    const searchString = yield select(searchValueSelector);
    try {
        const { data } = yield locationSearch(searchString);
        console.log(data);
        console.log('search action success');
        yield put(actions.success({ data: data }));
    } catch (e) {
        console.log('search action failure');
        yield put(actions.failure({ error: 'an error occurred' }));
    }
}

export default function* searchSaga() {
    yield all([
        searchFlow(),
    ])
}