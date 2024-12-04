import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './layouts/Header';

function App() {
    return (
        <div className="prose max-w-none">
            <Header />
            <Outlet />
        </div>
    );
}

export default App;
