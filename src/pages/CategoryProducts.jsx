import { useEffect, useState } from 'react';
import Section from '../components/Section';
import { useNavigate, useParams } from 'react-router-dom';
import blank from '../assets/blank.json';
import loader4 from '../assets/loader4.json';

import Lottie from 'lottie-react';
export default function CategoryProducts() {
    const { category } = useParams();
    const navigate = useNavigate();
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    console.log(category);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/category/${category}`
                );

                if (!response.ok) {
                    const error = await response.json();
                    throw new Error(error.message || 'Failed to add coffee');
                }

                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error:', error);
                navigate('/404');
            } finally {
                setLoading(false);
            }
        })();
    }, [category, navigate]);

    console.log(products);

    if (loading) {
        return (
            <Section className={'flex justify-center items-center min-h-[80vh]'}>
                <Lottie animationData={loader4} className="w-40" />;
            </Section>
        );
    }

    if (!products || products.length === 0) {
        return (
            <Section className={'flex justify-center items-center min-h-[80vh]'}>
                <Lottie animationData={blank} className="w-40" />;<span>No product found</span>
            </Section>
        );
    }

    return (
        <Section>
            {/* <Button
                className="bg-accent my-4"
                onClick={() => {
                    setIsSorted(true);
                }}
            >
                Sort
            </Button> */}
            <table className="min-w-full   rounded-xl overflow-hidden bg-lightCard dark:bg-darkCard text-lightPrimaryText dark:text-darkPrimaryText">
                <thead className="bg-primary">
                    <tr>
                        <th className="  px-4 py-4 text-darkPrimaryText">Name</th>
                        <th className="  px-4 py-4 text-darkPrimaryText">Price ($)</th>
                        <th className="  px-4 py-4 text-darkPrimaryText">Category</th>
                        <th className="  px-4 py-4 text-darkPrimaryText">View</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr
                            key={product._id}
                            className="even:bg-lightCardSecondary even:dark:bg-darkCardSecondary hover:bg-lightCardHover hover:dark:bg-darkCardHover"
                        >
                            <td className="  px-4 py-2">{product.name}</td>
                            <td className="  px-4 py-2">{product.price}</td>
                            <td className="  px-4 py-2">{product.category}</td>
                            <td
                                className="  px-4 py-2 cursor-pointer hover:underline"
                                onClick={() => {
                                    navigate(`/details/${product._id}`);
                                }}
                            >
                                Details
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Section>
    );
}
