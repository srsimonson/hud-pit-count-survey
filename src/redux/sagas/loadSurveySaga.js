import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* loadSurveySaga() {
    yield takeLatest('FETCH_NEW_SURVEY', newSurvey)
    // yield takeEvery('FETCH_ALL_SURVEYS', allSurveys)
}

function* newSurvey(action) {
    console.log('action.payload:', action);
    
    try {
        const elementsResponse = yield axios.get('/')
        yield put({type: 'SET_SURVEY', payload: elementsResponse.data})
    } catch (error) {
        console.log('ERROR with newSurvey in loadSurveysSaga.js', error);  
    }
}

export default loadSurveySaga;