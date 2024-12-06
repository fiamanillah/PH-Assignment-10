import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa6';
import { FaAngleUp } from 'react-icons/fa6';

export default function NavLinks() {
    const [equipmentMenuVisible, setEquipmentMenuVisible] = useState(false);

    const toggleEquipmentMenu = () => {
        setEquipmentMenuVisible(prev => !prev);
    };

    const closeEquipmentMenu = () => {
        setEquipmentMenuVisible(false);
    };

    return (
        <nav className="bg-primary bg-opacity-70 py-0 prose-a:text-darkPrimaryText rounded-full relative">
            {/* Overlay */}
            {equipmentMenuVisible && (
                <div
                    className="fixed left-0 top-0 z-0 w-[100vw] h-[100vh] bg-transparent"
                    onClick={closeEquipmentMenu}
                />
            )}
            <ul className="flex gap-0 duration-200 prose-a:!text-lg items-center">
                <li className="translate-y-[1px]">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `hover:!text-accent !text-xl py-1 px-4 ${
                                isActive ? '!text-darkPrimaryText bg-darkCard rounded-full' : ''
                            }`
                        }
                    >
                        Home
                    </NavLink>
                </li>

                <li className="translate-y-[1px] relative">
                    <span
                        className="hover:!text-accent !text-xl py-1 px-4 cursor-pointer select-none flex items-center gap-2"
                        onClick={toggleEquipmentMenu}
                    >
                        Equipments {equipmentMenuVisible ? <FaAngleUp /> : <FaAngleDown />}
                    </span>

                    {/* Dropdown Menu */}
                    <ul
                        className={`absolute z-20 flex w-[115%] flex-col items-start gap-2 bg-lightCardHover dark:bg-darkCardHover p-2 rounded-lg top-10 duration-200 ${
                            equipmentMenuVisible ? 'scale-y-100' : 'scale-y-0'
                        } origin-top`}
                    >
                        <li className="translate-y-[1px]">
                            <NavLink
                                to="/add-product"
                                className={({ isActive }) =>
                                    `hover:!text-accent !text-xl py-1 px-4 ${
                                        isActive
                                            ? '!text-darkPrimaryText bg-darkCard rounded-full'
                                            : ''
                                    }`
                                }
                                onClick={closeEquipmentMenu}
                            >
                                Add Equipment
                            </NavLink>
                        </li>
                        <li className="translate-y-[1px]">
                            <NavLink
                                to="/my-product"
                                className={({ isActive }) =>
                                    `hover:!text-accent !text-xl py-1 px-4 ${
                                        isActive
                                            ? '!text-darkPrimaryText bg-darkCard rounded-full'
                                            : ''
                                    }`
                                }
                                onClick={closeEquipmentMenu}
                            >
                                My Equipments
                            </NavLink>
                        </li>
                        <li className="translate-y-[1px]">
                            <NavLink
                                to="/all-products"
                                className={({ isActive }) =>
                                    `hover:!text-accent !text-xl py-1 px-4 ${
                                        isActive
                                            ? '!text-darkPrimaryText bg-darkCard rounded-full'
                                            : ''
                                    }`
                                }
                                onClick={closeEquipmentMenu}
                            >
                                All Equipments
                            </NavLink>
                        </li>
                    </ul>
                </li>

                <li className="translate-y-[1px]">
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `hover:!text-accent !text-xl py-1 px-4 ${
                                isActive ? '!text-darkPrimaryText bg-darkCard rounded-full' : ''
                            }`
                        }
                    >
                        Contact Us
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
