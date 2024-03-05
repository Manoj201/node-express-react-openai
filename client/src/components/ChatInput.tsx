import { Paper, TextField, Typography } from '@mui/material';
import { chatActions } from '@store/chat.slice';
import { colors } from '@theme/index';
import React from 'react';
import { useDispatch } from 'react-redux';

interface ChatInputProps {}

const ChatInput: React.FC<ChatInputProps> = () => {
    const dispatch = useDispatch();
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            // alert('Enter key pressed');
            dispatch(chatActions.postChatMessage({ userInput: inputRef.current?.value || '' }));
            inputRef.current?.value && (inputRef.current.value = '');
        }
    };

    return (
        <Paper
            elevation={2}
            sx={{
                backgroundColor: colors.grey,
                padding: '15px',
                gap: '10px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <TextField
                fullWidth
                variant="outlined"
                size="small"
                placeholder="Type your message here and press enter to send"
                InputProps={{
                    endAdornment: (
                        <Typography sx={{ fontSize: '12px', color: colors.info, fontWeight: 'bold' }}>Enter</Typography>
                    ),
                }}
                onKeyUp={handleKeyPress}
                autoComplete="off"
                multiline
                minRows={1}
                maxRows={2} // Set maxRows to 1 to avoid going to the next line after pressing enter
                inputRef={inputRef}
            />
        </Paper>
    );
};
export default ChatInput;
