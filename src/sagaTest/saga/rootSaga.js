import {call, put, all, take, takeEvery, takeLatest, delay} from 'redux-saga/effects';



function *hello() {
    console.log('hello saga');
}


function *addByAsync() {
    yield delay(2000);
    yield put({type: 'add'});
}

function *watchAddByAsync() {
    yield takeEvery('addByAsync', addByAsync);
}

export default function *rootSaga() {
    yield all([
        hello(),
        watchAddByAsync()
    ])
}