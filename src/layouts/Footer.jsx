import Section from '../components/Section';
import { useTheme } from '../context/ThemeContext';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    const { darkMode } = useTheme();

    return (
        <Section>
            <div className="flex justify-between border-t-2 pt-10 rounded-t-[50px] mt-5">
                <div className="basis-1/3 flex flex-col gap-3 items-start">
                    <img
                        className="h-12"
                        src={darkMode ? '/logo-dark.png' : '/logo-light.png'}
                        alt=""
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae veritatis,
                        animi natus veniam cupiditate consequatur rerum iste tempore accusamus fuga!
                    </p>
                    <div className="flex gap-3">
                        <a href="#">
                            <button className="bg-primary text-2xl p-2 rounded-full text-darkPrimaryText border-2 hover:bg-darkPrimaryText hover:text-primary border-darkCardSecondary duration-200">
                                <FaFacebookF />
                            </button>
                        </a>
                        <a href="#">
                            <button className="bg-primary text-2xl p-2 rounded-full text-darkPrimaryText border-2 hover:bg-darkPrimaryText hover:text-primary border-darkCardSecondary duration-200">
                                <FaInstagram />
                            </button>
                        </a>
                        <a href="#">
                            <button className="bg-primary text-2xl p-2 rounded-full text-darkPrimaryText border-2 hover:bg-darkPrimaryText hover:text-primary border-darkCardSecondary duration-200">
                                <FaXTwitter />
                            </button>
                        </a>
                        <a href="#">
                            <button className="bg-primary text-2xl p-2 rounded-full text-darkPrimaryText border-2 hover:bg-darkPrimaryText hover:text-primary border-darkCardSecondary duration-200">
                                <FaLinkedinIn />
                            </button>
                        </a>
                    </div>
                </div>
                <ul className="basis-1/3 flex flex-col items-center justify-center">
                    <strong>Company</strong>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
                <div className="basis-1/3">
                    <img
                        className=" bg-lightCard dark:bg-darkCard rounded-xl"
                        src="/payments.png"
                        alt=""
                    />
                </div>
            </div>
            <hr className="my-4" />
            <p className="text-center my-4">@2024 Equisports | All Rights Reserved.</p>
        </Section>
    );
}
