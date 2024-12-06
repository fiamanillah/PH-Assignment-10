import { NavLink } from 'react-router-dom';

export default function NavLinks() {
    return (
        <nav className="bg-primary bg-opacity-70 py-1 prose-a:text-darkPrimaryText   rounded-full">
            <ul className="flex gap-0 duration-200 prose-a:!text-lg">
                <li className="translate-y-[1px]">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            ` hover:!text-accent !text-xl py-1 px-4  ${
                                isActive ? '!text-darkPrimaryText bg-darkCard  rounded-full' : ''
                            }`
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li className="translate-y-[1px]">
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            ` hover:!text-accent !text-xl py-1 px-4  ${
                                isActive ? '!text-darkPrimaryText bg-darkCard  rounded-full' : ''
                            }`
                        }
                    >
                        Log In
                    </NavLink>
                </li>
                <li className="translate-y-[1px]">
                    <NavLink
                        to="/add-product"
                        className={({ isActive }) =>
                            ` hover:!text-accent !text-xl py-1 px-4  ${
                                isActive ? '!text-darkPrimaryText bg-darkCard  rounded-full' : ''
                            }`
                        }
                    >
                        Add Product
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
