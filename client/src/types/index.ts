interface ChatState {
    ingestFileLoading: boolean;
    ingestFileError: boolean;

    chatMessages: ChatData[];
    chatMessagesLoading: boolean;
    chatMessagesError: boolean;
}

interface ChatData {
    question: string;
    answer: string;
}

interface IngestFileRequest {
    file: File;
}

interface IngestFileResponse {
    success: boolean;
}

interface PostChatMessageRequest {
    userInput: string;
}

interface PostChatMessageResponse {
    text: string;
}

export enum ToastType {
    Success,
    Warn,
    Error,
}

export type {
    ChatState,
    IngestFileRequest,
    IngestFileResponse,
    PostChatMessageRequest,
    PostChatMessageResponse,
    ChatData,
};
