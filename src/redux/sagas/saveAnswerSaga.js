import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* saveAnswerSaga() {
    yield takeLatest('SAVE_ANSWER', saveAnswer)
}

function* saveAnswer(action) {
    try {
        const elementsResponse = yield axios.post(`/api/survey`, action.payload)
        yield put({
            type: 'SET_ANSWER', 
            payload: elementsResponse.data
        })
    } catch (error) {
        console.log('ERROR from saveAnswer in saveAnswerSaga.js', error);  
    }
}

export default saveAnswerSaga;