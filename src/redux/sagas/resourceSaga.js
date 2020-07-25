import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* resourceSaga() {
    yield takeLatest('FETCH_RESOURCES', displayResources)
    yield takeLatest('UPDATE_RESOURCE', updateResource)
}

function* displayResources() {
    try {
        const elementsResponse = yield axios.get(`/api/resource`)
        yield put({
            type: 'SET_RESOURCE',
            payload: elementsResponse.data
        })
    } catch(error) {
        console.log('ERROR with resources in resourceSaga.js');
    }
}

function* updateResource ( action ) {
    console.log('in updateResource:', action.payload);
    try {
        yield axios.put(`/api/resource/${action.payload.id}`, action.payload)
        // yield put ({ type: 'SET_RESOURCE', payload: elementsResponse.data })
        yield put ({ type: 'FETCH_RESOURCES' }) 
    } catch (error) {
        console.log('ERROR from updateResource in resourceSaga.js', error);
    }
}

export default resourceSaga;