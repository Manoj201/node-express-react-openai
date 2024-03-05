import { all } from '@redux-saga/core/effects';
import chatSaga from '@store/chat.saga';

function* rootSaga() {
    yield all([...chatSaga]);
}

export default rootSaga;
