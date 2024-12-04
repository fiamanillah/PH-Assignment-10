import { Link } from 'react-router-dom';
import Section from '../components/Section';
import NavLinks from '../components/NavLinks';
import { useTheme } from '../context/ThemeContext';
import { BsMoonStars } from 'react-icons/bs';
import { PiSunBold } from 'react-icons/pi';

function Header() {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <Section>
            <div className="flex items-center justify-between">
                <div className='flex items-center gap-5'>
                    <Link to={'/'}>
                        <img
                            className="max-h-16"
                            src={darkMode ? '/logo-dark.png' : '/logo-light.png'}
                            alt=""
                        />
                    </Link>
                    <NavLinks />
                </div>

                <button
                    className={`text-2xl  p-2 rounded-full border-2 duration-500 ${
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
        </Section>
    );
}

export default Header;
