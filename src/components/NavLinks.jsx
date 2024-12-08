import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa6';
import { FaAngleUp } from 'react-icons/fa6';

export default function NavLinks({ className, closeEquipmentMenuH }) {
    const [equipmentMenuVisible, setEquipmentMenuVisible] = useState(false);

    const toggleEquipmentMenu = () => {
        setEquipmentMenuVisible(prev => !prev);
    };

    const closeEquipmentMenu = () => {
        setEquipmentMenuVisible(false);
    };

    return (
        <nav
            className={`bg-primary bg-opacity-70 dark:bg-opacity-60 py-0 prose-a:text-darkPrimaryText rounded-full relative laptop-xl:absolute laptop-xl:h-[50vh] laptop-xl:top-[70px] laptop-xl:rounded-l-xl laptop-xl:right-0 laptop-xl:rounded-none laptop-xl:w-1/4 mobile-lg:w-1/2 mobile-sm:w-8/12 laptop-xl:px-4 laptop-xl:bg-opacity-100 laptop-xl:dark:bg-opacity-100 ${className}`}
        >
            {/* Overlay */}
            {equipmentMenuVisible && (
                <div
                    className="fixed left-0 top-0 z-0 w-[98vw] h-[98vh] bg-transparent"
                    onClick={closeEquipmentMenu}
                />
            )}
            <ul className="flex gap-0 duration-200 prose-a:!text-lg items-center laptop-xl:flex-col laptop-xl:py-5 laptop-xl:items-stretch laptop-xl:gap-3">
                <li className="translate-y-[1px]">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `hover:!text-accent !text-xl py-1 px-4 ${
                                isActive ? '!text-darkPrimaryText bg-darkCard rounded-full' : ''
                            }`
                        }
                        onClick={() => {
                            closeEquipmentMenu();
                            closeEquipmentMenuH();
                        }}
                    >
                        Home
                    </NavLink>
                </li>

                <li className="translate-y-[1px] relative">
                    <span
                        className="hover:!text-accent !text-xl py-1 px-4 cursor-pointer select-none flex items-center gap-2 text-darkPrimaryText"
                        onClick={toggleEquipmentMenu}
                    >
                        Equipments {equipmentMenuVisible ? <FaAngleUp /> : <FaAngleDown />}
                    </span>

                    {/* Dropdown Menu */}
                    <ul
                        className={` absolute laptop-xl:relative laptop-xl:top-0 laptop-xl:z-0 laptop-xl:w-[100%] laptop-xl:bg-transparent laptop-xl:dark:bg-transparent z-20 laptop-xl:border-none  flex w-[115%] flex-col items-start gap-2 bg-lightCardHover dark:bg-darkCardHover p-2 rounded-lg top-10 duration-200 prose-a:text-lightPrimaryText prose-a:dark:text-darkPrimaryText border-2 border-primary  ${
                            equipmentMenuVisible
                                ? 'scale-y-100  laptop-xl:p-2 laptop-xl:h-auto opacity-100'
                                : 'scale-y-0 laptop-xl:p-0 laptop-xl:h-0 opacity-0'
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
                                onClick={() => {
                                    closeEquipmentMenu();
                                    closeEquipmentMenuH();
                                }}
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
                                onClick={() => {
                                    closeEquipmentMenu();
                                    closeEquipmentMenuH();
                                }}
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
                                onClick={() => {
                                    closeEquipmentMenu();
                                    closeEquipmentMenuH();
                                }}
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
                        onClick={() => {
                            closeEquipmentMenu();
                            closeEquipmentMenuH();
                        }}
                    >
                        Contact Us
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
