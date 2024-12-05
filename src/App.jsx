import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

function App() {
    return (
        <div className="prose max-w-none font-spaceMono tracking-tight relative bg-background dark:bg-darkBackground">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
