import { Link, useNavigate } from 'react-router-dom';
import Section from '../components/Section';
import NavLinks from '../components/NavLinks';
import { useTheme } from '../context/ThemeContext';
import { BsMoonStars } from 'react-icons/bs';
import { PiSunBold } from 'react-icons/pi';
import { Tooltip } from 'react-tooltip';
import { useAuth } from '../context/AuthContext';
import Lottie from 'lottie-react';
import loader1 from '../assets/loader1.json';
import loader2 from '../assets/loader2.json';
import { IoLogOutOutline } from 'react-icons/io5';

function Header() {
    const { darkMode, toggleDarkMode } = useTheme();
    const { user, loading, logout } = useAuth();
    const navigate = useNavigate();
    return (
        <Section className={'sticky top-0 bg-opacity-0 backdrop-blur-lg py-0 pt-2'}>
            <div className="flex items-center justify-between bg-secondary bg-opacity-30 rounded-full px-3 py-1">
                <div className="flex items-center gap-5">
                    <Link to={'/'}>
                        <img
                            className="max-h-12"
                            src={darkMode ? '/logo-dark.png' : '/logo-light.png'}
                            alt=""
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Equisports"
                        />
                    </Link>
                    <Tooltip
                        id="my-tooltip"
                        className="!bg-primary !text-white !p-1 !rounded-lg !shadow-lg"
                    />
                    <NavLinks />
                </div>

                <div className="flex items-center gap-2">
                    {loading ? (
                        <Lottie animationData={loader2} loop={true} className="h-12" />
                    ) : user ? (
                        <div className="flex gap-2">
                            <button
                                className="h-10 w-10 rounded-full border-2 overflow-hidden"
                                data-tooltip-id="userName"
                                data-tooltip-content={user?.displayName}
                                onClick={() => {
                                    navigate('/user-profile');
                                }}
                            >
                                {user ? (
                                    <img className="" src={user?.photoURL} alt="" srcSet="" />
                                ) : (
                                    <Lottie animationData={loader1} loop={true} />
                                )}
                            </button>{' '}
                            <Tooltip
                                id="userName"
                                className="!bg-primary !text-white !p-2 !rounded-lg !shadow-lg"
                            />
                            <button
                                className="flex items-center justify-center bg-red-500 w-10 h-10 text-darkPrimaryText rounded-full font-bold border-2 border-red-400"
                                data-tooltip-id="logout"
                                data-tooltip-content="Log Out"
                                onClick={() => {
                                    logout();
                                }}
                            >
                                <IoLogOutOutline className="text-xl" />
                            </button>
                            <Tooltip
                                id="logout"
                                className="!bg-primary !text-white !py-1 !rounded-lg !shadow-lg"
                            />
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <Link to={'/login'} className=" font-bold rounded-xl">
                                Log In
                            </Link>
                            <Link
                                to={'/register'}
                                className="bg-darkCard border-2 border-darkCardHover font-bold py-1 px-2 rounded-xl !text-darkPrimaryText"
                            >
                                Register
                            </Link>
                        </div>
                    )}

                    <button
                        className={`text-2xl w-10 h-10 flex items-center justify-center  p-2 rounded-full border-2 duration-500 ${
                            darkMode
                                ? 'bg-lightCardSecondary text-lightPrimaryText border-primary rotate-0 '
                                : 'text-accent border-accent bg-accent bg-opacity-15 rotate-180'
                        }`}
                        onClick={() => {
                            toggleDarkMode();
                        }}
                    >
                        {darkMode ? <BsMoonStars /> : <PiSunBold />}
                    </button>
                </div>
            </div>
        </Section>
    );
}

export default Header;
