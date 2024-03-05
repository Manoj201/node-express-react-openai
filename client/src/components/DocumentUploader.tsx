import { Box, Button, CircularProgress, Paper, Typography } from '@mui/material';
import { chatActions } from '@store/chat.slice';
import { RootState } from '@store/root.store';
import { colors, labelWeights } from '@theme/index';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface DocumentUploaderProps {
    //
}

const DocumentUploader: React.FC<DocumentUploaderProps> = () => {
    const dispatch = useDispatch();

    const fileInput = useRef<HTMLInputElement>(null);

    const [fileName, setFileName] = useState<string>('');

    const ingestFileLoading = useSelector((state: RootState) => state.chat.ingestFileLoading);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target && event.target.files) {
            const selectedFile: File = event.target.files[0];
            setFileName(selectedFile.name);
            dispatch(chatActions.postIngestFile({ file: selectedFile }));
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
            <Box>
                <Typography sx={{ color: colors.white, fontWeight: labelWeights.bold }}>
                    Your Succesfully uploaded the document
                </Typography>
                <Typography sx={{ color: colors.warning, fontWeight: labelWeights.normal, fontSize: '14px' }}>
                    {fileName}
                </Typography>
            </Box>

            <Button
                variant="contained"
                component="label"
                size="small"
                sx={{ backgroundColor: colors.primary, color: colors.white, fontWeight: labelWeights.bold }}
                onClick={() => {
                    if (fileInput.current) {
                        fileInput.current.click();
                    }
                }}
                startIcon={ingestFileLoading && <CircularProgress size={15} color="inherit" />}
            >
                Upload File
            </Button>
            <input type="file" onChange={handleFileChange} ref={fileInput} style={{ display: 'none' }} />
        </Paper>
    );
};

export default DocumentUploader;
