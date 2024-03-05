import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/

export default defineConfig(({ command }) => {
    const config = {
        plugins: [tsconfigPaths(), react()],
        envDir: './env',
        base: '/',
        preview: {
            port: 8080,
            strictPort: true,
        },
        server: {
            port: 8080,
            strictPort: true,
            host: true,
            origin: 'http://0.0.0.0:8080',
        },
    };
    if (command !== 'serve') {
        config.base = '/ai-resume-scanner/';
    }

    return config;
});
