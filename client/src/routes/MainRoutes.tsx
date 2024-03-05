import { ROUTES } from '@constants/index';
import ChatPage from '@pages/Chat.page';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const MainRoute: React.FC = () => {
    return (
        <BrowserRouter basename={'/'}>
            <Routes>
                <Route path="/" element={<Navigate to={ROUTES.CHAT_PAGE} />} />
                <Route path={ROUTES.CHAT_PAGE} element={<ChatPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MainRoute;
