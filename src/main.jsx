import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import MainRoutes from './routes/MainRoutes';
import { AuthProvider } from './context/AuthContext';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider>
            <AuthProvider>
                <MainRoutes />
            </AuthProvider>
        </ThemeProvider>
    </StrictMode>
);
