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
function Header() {
    const { darkMode, toggleDarkMode } = useTheme();
    const { user } = useAuth();
    const navigate = useNavigate();
    return (
        <Section>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <Link to={'/'}>
                        <img
                            className="max-h-16"
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
                    <button
                        className="h-12 w-12 rounded-full border-2 overflow-hidden"
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
                    </button>
                    <Tooltip
                        id="userName"
                        className="!bg-primary !text-white !p-2 !rounded-lg !shadow-lg"
                    />

                    <button
                        className={`text-2xl w-12 h-12 flex items-center justify-center  p-2 rounded-full border-2 duration-500 ${
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
