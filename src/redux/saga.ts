import buildings from './buildings/saga';
import { all } from 'redux-saga/effects'

function* rootSaga() {
  yield all([
    buildings()
  ])
}

export default rootSaga
