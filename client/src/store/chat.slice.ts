/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ChatState, IngestFileRequest, PostChatMessageRequest, PostChatMessageResponse } from '@app-types/index';

const initialState: ChatState = {
    ingestFileLoading: false,
    ingestFileError: false,
    chatMessages: [],
    chatMessagesLoading: false,
    chatMessagesError: false,
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        postIngestFile: (state, action: PayloadAction<IngestFileRequest>) => {
            state.ingestFileLoading = true;
            state.ingestFileError = false;
            state.chatMessages = [];
        },
        postIngetsFileSuccess: (state) => {
            state.ingestFileLoading = false;
            state.ingestFileError = false;
        },
        postIngetsFileError: (state) => {
            state.ingestFileLoading = false;
            state.ingestFileError = true;
        },

        postChatMessage: (state, action: PayloadAction<PostChatMessageRequest>) => {
            const newChatMessage = {
                question: action.payload.userInput,
                answer: '',
            };
            state.chatMessages = [...state.chatMessages, newChatMessage];
            state.chatMessagesLoading = true;
            state.chatMessagesError = false;
        },
        postChatMessageSuccess: (state, action: PayloadAction<PostChatMessageResponse>) => {
            state.chatMessagesLoading = false;
            state.chatMessagesError = false;
            state.chatMessages[state.chatMessages.length - 1].answer = action.payload.text;
        },
        postChatMessageError: (state) => {
            state.chatMessagesLoading = false;
            state.chatMessagesError = true;
        },
    },
});

export const { actions: chatActions, reducer: chatReducer } = chatSlice;
