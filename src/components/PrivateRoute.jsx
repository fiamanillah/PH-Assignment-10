import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import Section from '../components/Section';
import Lottie from 'lottie-react';
import loader4 from '../assets/loader4.json';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        if (!loading) {
            setAuthChecked(true);
        }
    }, [loading]);

    if (!authChecked) {
        return (
            <Section className={'flex justify-center items-center min-h-[80vh]'}>
                <Lottie animationData={loader4} className="w-40" />;
            </Section>
        );
    }

    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
