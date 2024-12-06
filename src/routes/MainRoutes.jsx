import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import App from '../App';
import LogInPage from '../pages/LogInPage';
import Error from '../pages/Error';
import SignUpPage from '../pages/SignUpPage';
import UserProfile from '../pages/UserProfile';
import PrivateRoute from '../components/PrivateRoute';
import AddProduct from '../pages/AddProduct';

const ROUTES = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'login',
                element: <LogInPage />,
            },
            {
                path: 'register',
                element: <SignUpPage />,
            },
            {
                path: 'user-profile',
                element: (
                    <PrivateRoute>
                        <UserProfile />,
                    </PrivateRoute>
                ),
            },
            {
                path: 'add-product',
                element: <AddProduct />,
            },
        ],
    },
    {
        path: '/404',
        element: <Error />,
    },
    {
        path: '*',
        element: <Error />,
    },
]);

export default function MainRoutes() {
    return <RouterProvider router={ROUTES} />;
}
