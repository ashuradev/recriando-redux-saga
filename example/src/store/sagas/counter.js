import { takeEvery, put, delay, call } from 'spark/effects';

import { Types, increment, decrement } from '../actions/counter';

function* incrementRequest() {
  yield delay(1000);

  yield put(increment());
}

function* decrementRequest() {
  yield delay(1000);

  yield put(decrement());
}

export default function* rootSaga() {
  yield takeEvery(Types.INCREMENT_REQUEST, incrementRequest);
  yield takeEvery(Types.DECREMENT_REQUEST, decrementRequest);
}
