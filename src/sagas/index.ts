import { all, fork } from 'redux-saga/effects'

import { GoogleBooksSaga } from './googleBooks'

export const rootSaga = function* root() {
  yield all([fork(GoogleBooksSaga)])
}
