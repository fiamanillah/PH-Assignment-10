import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import App from '../App';

const ROUTES = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
]);

export default function MainRoutes() {
    return <RouterProvider router={ROUTES} />;
}
