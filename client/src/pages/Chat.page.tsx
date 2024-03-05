import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { colors, labelWeights } from '@theme/index';
import DocumentUploader from '@components/DocumentUploader';
import ChatInput from '@components/ChatInput';
import ChatContainer from '@components/ChatContainer';
import { useSelector } from 'react-redux';
import { RootState } from '@store/root.store';
import useApiResponseHandler from '@hooks/UseApiResponseHandler.hook';

const ChatPage: React.FC = () => {
    const [fileUploadSuccess, setFileUploadSuccess] = React.useState(false);

    const ingestFileLoading = useSelector((state: RootState) => state.chat.ingestFileLoading);
    const ingestFileError = useSelector((state: RootState) => state.chat.ingestFileError);

    useApiResponseHandler(
        ingestFileLoading,
        ingestFileError,
        () => {
            setFileUploadSuccess(true);
        },
        () => {
            setFileUploadSuccess(false);
        },
    );

    return (
        <Box>
            <Grid container justifyContent={'center'}>
                <Grid item xs={12} sm={6} sx={{ margin: '20px 20px 15px 20px' }}>
                    <Typography
                        sx={{
                            fontSize: '20px',
                            fontWeight: labelWeights.bold,
                            color: colors.white,
                        }}
                    >
                        You can upload any document here, and ask question from AI chatbot
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <DocumentUploader />
                        <ChatContainer />
                        {fileUploadSuccess && <ChatInput />}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ChatPage;
