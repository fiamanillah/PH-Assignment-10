import { FaFootballBall, FaShoePrints, FaTshirt, FaGripHorizontal } from 'react-icons/fa';
import {
    GiTennisRacket,
    GiCricketBat,
    GiChestArmor,
    GiWeightLiftingUp,
    GiSnorkel,
    GiSnowflake2,
} from 'react-icons/gi';
import Section from './Section';

const categories = [
    { name: 'Balls', value: 'Balls', icon: <FaFootballBall /> },
    { name: 'Rackets', value: 'Rackets', icon: <GiTennisRacket /> },
    { name: 'Bats', value: 'Bats', icon: <GiCricketBat /> },
    { name: 'Protective Gear', value: 'Protective Gear', icon: <GiChestArmor /> },
    { name: 'Footwear', value: 'Footwear', icon: <FaShoePrints /> },
    { name: 'Clothing', value: 'Clothing', icon: <FaTshirt /> },
    { name: 'Fitness Equipment', value: 'Fitness Equipment', icon: <GiWeightLiftingUp /> },
    { name: 'Water Sports Equipment', value: 'Water Sports Equipment', icon: <GiSnorkel /> },
    { name: 'Winter Sports Equipment', value: 'Winter Sports Equipment', icon: <GiSnowflake2 /> },
    { name: 'Accessories', value: 'Accessories', icon: <FaGripHorizontal /> },
];

const CategoryList = () => {
    return (
        <Section>
            <div className="mx-auto max-w-screen-sm text-center my-5">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold">Categories</h2>
            </div>
            <ul className="grid grid-cols-3 gap-2 mobile-lg:grid-cols-2">
                {categories.map(category => (
                    <li
                        key={category.value}
                        className="bg-lightCard dark:bg-darkCard flex items-center py-2 px-4 rounded-xl gap-2"
                    >
                        {category.icon} {category.name}
                    </li>
                ))}
            </ul>
        </Section>
    );
};

export default CategoryList;
