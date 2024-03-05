import { CallEffect, PutEffect, call, put, takeLatest } from 'redux-saga/effects';
import { chatActions } from '@store/chat.slice';
import ChatAPI from '@api/ChatAPI';
import {
    IngestFileRequest,
    IngestFileResponse,
    ToastType,
    PostChatMessageRequest,
    PostChatMessageResponse,
} from '@app-types/index';
import { AnyAction } from '@redux-saga/core';
import Notification from '@components/Notification.component';
// import Notification from '@components/notification/Notification.component';

function* watchPostIngestFile(
    action: ReturnType<typeof chatActions.postIngestFile>,
): Generator<CallEffect<IngestFileRequest> | PutEffect<AnyAction>, void, IngestFileResponse> {
    try {
        const response = yield call(ChatAPI.ingestFile, action.payload.file);
        if (response.success) {
            yield put(chatActions.postIngetsFileSuccess());
            Notification('Nice!', 'Document uploaded, Please start your chat', ToastType.Success);
        } else {
            throw new Error('File upload failed');
        }
    } catch (error) {
        yield put(chatActions.postIngetsFileError());
        Notification('Oops!', 'Document Upload Failed', ToastType.Error);
    }
}

function* watchPostChatMessage(
    action: ReturnType<typeof chatActions.postChatMessage>,
): Generator<CallEffect<PostChatMessageRequest> | PutEffect<AnyAction>, void, PostChatMessageResponse> {
    try {
        const response = yield call(ChatAPI.chat, action.payload.userInput);
        yield put(chatActions.postChatMessageSuccess({ text: response.text }));
    } catch (error) {
        yield put(chatActions.postChatMessageError());
        Notification('Oops!', 'Sorry Message can not process. Try again later', ToastType.Error);
    }
}

const movieSaga = [
    takeLatest(chatActions.postIngestFile, watchPostIngestFile),
    takeLatest(chatActions.postChatMessage, watchPostChatMessage),
];

export default movieSaga;
