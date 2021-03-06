import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* loadSurveySaga() {
    yield takeLatest('FETCH_NEW_SURVEY', newSurvey)
    yield takeEvery('FETCH_ALL_SURVEYS', allSurveys)
}

function* newSurvey() {
    // console.log('action.payload:', action.payload);
    try {
        const elementsResponse = yield axios.get(`/api/survey`)
        yield put({
            type: 'SET_SURVEY', 
            payload: elementsResponse.data
        })
    } catch (error) {
        console.log('ERROR with newSurvey in loadSurveysSaga.js', error);  
    }
}

function* allSurveys() {
    console.log('in allSurveys');
    
    try {
        const elementsResponse = yield axios.get(`/api/survey/all`)
        yield put({
            type: 'SET_ALL_SURVEYS',
            payload: elementsResponse.data
        })
    } catch (error) {
        console.log('ERROR from allSurveys() in loadSurveySaga.js', error);
    }
}

export default loadSurveySaga;