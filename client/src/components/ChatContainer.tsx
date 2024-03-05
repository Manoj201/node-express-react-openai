import { RootState } from '@store/root.store';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ChatResponseCard from './ChatRespopnseCard';
import { Box } from '@mui/material';

const ChatContainer: React.FC = () => {
    const chatMessages = useSelector((state: RootState) => state.chat.chatMessages);

    const chatContainerRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatMessages]);

    return (
        <Box
            sx={{
                maxHeight: '70vh',
                overflowY: 'scroll',
                paddingRight: '20px',
                marginRight: '-20px',
            }}
            ref={chatContainerRef}
        >
            {chatMessages.map((data, index) => (
                <ChatResponseCard key={index} data={data} />
            ))}
        </Box>
    );
};

export default ChatContainer;
