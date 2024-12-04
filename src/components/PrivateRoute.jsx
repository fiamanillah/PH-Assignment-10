import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import Section from '../components/Section';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        if (!loading) {
            setAuthChecked(true);
        }
    }, [loading]);

    if (!authChecked) {
        return <Section className={'h-screen animate-pulse'}></Section>;
    }

    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
