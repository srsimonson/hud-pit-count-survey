import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import loadSurveySaga from './loadSurveySaga';
import manageAnswerSaga from './manageAnswerSaga';
import resourceSaga from './resourceSaga';

export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    loadSurveySaga(),
    manageAnswerSaga(),
    resourceSaga()
  ]);
}
