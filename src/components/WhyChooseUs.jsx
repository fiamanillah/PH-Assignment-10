import Section from './Section';
import {
    FaMedal,
    FaShippingFast,
    FaDollarSign,
    FaStar,
    FaRecycle,
    FaHandshake,
} from 'react-icons/fa';

export default function WhyChooseUs() {
    const features = [
        {
            title: 'Premium Quality',
            description:
                'Our sports equipment is crafted using the highest quality materials, ensuring durability and top-notch performance.',
            icon: <FaMedal />,
        },
        {
            title: 'Fast & Reliable Shipping',
            description:
                'Get your gear delivered quickly and safely with our trusted and efficient shipping services.',
            icon: <FaShippingFast />,
        },
        {
            title: 'Affordable Prices',
            description:
                'We provide the best value for money by offering high-quality products at competitive prices.',
            icon: <FaDollarSign />,
        },
        {
            title: 'Customer Satisfaction',
            description:
                'With thousands of happy customers, we pride ourselves on delivering products that exceed expectations.',
            icon: <FaStar />,
        },
        {
            title: 'Eco-Friendly Practices',
            description:
                'We are committed to sustainable practices, using eco-friendly materials wherever possible.',
            icon: <FaRecycle />,
        },
        {
            title: 'Trusted by Athletes',
            description:
                'Our gear is trusted by professional athletes and fitness enthusiasts worldwide for its performance and reliability.',
            icon: <FaHandshake />,
        },
    ];

    return (
        <Section>
            <div
                className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6"
                id="why-choose-us"
            >
                <div className="mx-auto max-w-screen-sm">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold">Why Choose Us</h2>
                    <p className="mb-8 font-light lg:mb-16 sm:text-xl">
                        Discover why athletes and fitness enthusiasts trust us for their sports
                        equipment needs.
                    </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-center items-start p-6 bg-lightCard rounded-lg shadow-md dark:bg-darkCard border border-gray-200 dark:border-gray-700 hover:shadow-lg transform hover:-translate-y-1 transition-all"
                        >
                            <div className=" mb-4">
                                <span className="text-4xl text-primary">{feature.icon}</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                            <p className="text-sm font-light text-gray-600 dark:text-gray-400 text-left">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
