import { all, cancel, delay, put, take, throttle } from 'redux-saga/effects';
import { actions } from './slice';

function* searchFlow() {
    while (true) {
        const task = yield throttle(500, actions.start.type, getData);
        yield take(actions.clear.type);
        yield cancel(task);
        yield put(actions.clear());
    }
}

function* getData() {
    const data = yield Promise.resolve([1, 2, 3]);
    try {
        yield delay(2000);
        console.log('search action success');
        yield put(actions.success({ data: data }));
    } catch (e) {
        console.log('search action failure');
        yield put(actions.failure({ error: 'an error occurred' }));
    }
}

export default function* searchSaga() {
    yield all([
        searchFlow()
    ])
}