import { POST_FILE, POST } from './RestService';
import { API_URL } from '@constants/index';

// this url factory helps is there any diofferent p[ath for the api
const urlFactory = {
    ingestFile: () => `${API_URL}/api/v1/ingest`,
    chat: () => `${API_URL}/api/v1/chat`,
};

const ChatAPI = {
    ingestFile: async (file: File) => {
        const url = urlFactory.ingestFile();
        const formData = {
            file,
        };
        return await POST_FILE(url, formData);
    },
    chat: async (userInput: string) => {
        const url = urlFactory.chat();
        const data = {
            userInput,
        };
        return await POST(url, data);
    },
};

export default ChatAPI;
