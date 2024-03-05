import { ChatData } from '@app-types/index';
import { Box, Skeleton, Paper, Typography } from '@mui/material';
import { colors } from '@theme/index';
import React from 'react';

interface ChatResponseCardProps {
    data: ChatData;
}

const ChatResponseCard: React.FC<ChatResponseCardProps> = ({ data }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Paper
                    sx={{
                        textAlign: 'left',
                        width: 'fit-content',
                        padding: '10px',
                        borderRadius: '20px 20px 20px 0px',
                        maxWidth: '80%',
                    }}
                >
                    {data.question}
                </Paper>
            </Box>
            {data.answer ? (
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px', marginBottom: '20px' }}>
                    <Paper
                        sx={{
                            textAlign: 'left',
                            width: 'fit-content',
                            padding: '10px',
                            borderRadius: '20px 20px 0px 20px',
                            backgroundColor: colors.success,
                            maxWidth: '80%',
                        }}
                    >
                        <Typography sx={{ color: colors.white }}>{data.answer}</Typography>
                    </Paper>
                </Box>
            ) : (
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px', marginBottom: '20px' }}>
                    <Skeleton
                        width="20%"
                        sx={{
                            textAlign: 'left',
                            width: 'fit-content',
                            padding: '10px',
                            borderRadius: '20px 20px 0px 20px',
                            backgroundColor: colors.success,
                        }}
                    />
                </Box>
            )}
        </Box>
    );
};

export default ChatResponseCard;
