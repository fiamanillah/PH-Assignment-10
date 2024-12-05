import Section from '../components/Section';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
    const { darkMode } = useTheme();

    return (
        <Section>
            <div className='flex'>
                <div>
                    <img className='h-12' src={darkMode ? '/logo-dark.png' : '/logo-light.png'} alt="" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae veritatis,
                        animi natus veniam cupiditate consequatur rerum iste tempore accusamus fuga!
                    </p>
                </div>
                <ul>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
            </div>
        </Section>
    );
}
