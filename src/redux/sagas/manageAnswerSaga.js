import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* manageAnswerSaga() {
    yield takeLatest('SAVE_ANSWER', saveAnswer)
    yield takeLatest('DELETE_ANSWER', deleteAnswer)
    yield takeLatest('SUBMIT_SURVEY', submitSurvey)
}

function* saveAnswer(action) {
    console.log('action.payload:', action.payload);
    try {
        // const elementsResponse = yield axios.post(`/api/survey`, action.payload)
        yield put({
            type: 'SET_ANSWER', 
            payload: action.payload // not elementsResponse.data
            })
        } catch (error) {
        console.log('ERROR from saveAnswer in saveAnswerSaga.js', error);  
    }
}

function* submitSurvey(action) {
    console.log('action.payload:', action.payload);
    try {
        // const elementsResponse = 
        yield axios.post(`/api/survey`, action.payload)
        // yield put({
        //     type: 'SET_ANSWER', 
        //     payload: action.payload // not elementsResponse.data
        //     })
        } catch (error) {
        console.log('ERROR from saveAnswer in saveAnswerSaga.js', error);  
    }
}

function* deleteAnswer(action) {
    console.log('deleteAnswer:', action.payload);
    try {
        const elementsResponse = yield axios.delete(`api/survey/${action.payload}`)
        yield put ({ type: 'REMOVE_ANSWER' });
        yield put ({ type: 'FETCH_ALL_SURVEYS' });
    }
        catch (error) {
            console.log('ERROR from deleteAnswer in saveAnswerSaga');
        }
}

export default manageAnswerSaga;