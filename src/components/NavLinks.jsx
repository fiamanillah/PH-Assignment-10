import { NavLink } from 'react-router-dom';

export default function NavLinks() {
    return (
        <nav>
            <ul className="flex gap-3 duration-200">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `!font-bold hover:!text-accent !text-xl ${
                                isActive ? '!text-accent underline underline-offset-4' : ''
                            }`
                        }
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/add"
                        className={({ isActive }) =>
                            `!font-bold hover:!text-accent !text-xl ${
                                isActive ? '!text-accent' : ''
                            }`
                        }
                    >
                        Home
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
