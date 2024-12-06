import { useEffect, useState } from 'react';
import Section from '../components/Section';
import { useNavigate } from 'react-router-dom';
import blank from '../assets/blank.json';
import Lottie from 'lottie-react';
export default function AllProducts() {
    const [allProduct, setAllProduct] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        (async function fetchAllData() {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/all-products`);
            const allProductData = await response.json();
            console.log(allProductData);
            setAllProduct(allProductData);
        })();
    }, []);
    if (!allProduct || allProduct.length === 0) {
        return (
            <Section className={'flex justify-center items-center min-h-[80vh]'}>
                <Lottie animationData={blank} className="w-40" />;<span>No product found</span>
            </Section>
        );
    }
    return (
        <Section>
            <table className="min-w-full border-collapse border border-gray-200 rounded-xl bg-lightCard dark:bg-darkCard text-lightPrimaryText dark:text-darkPrimaryText">
                <thead>
                    <tr>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-lightPrimaryText dark:text-darkPrimaryText">
                            Name
                        </th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-lightPrimaryText dark:text-darkPrimaryText">
                            Price ($)
                        </th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-lightPrimaryText dark:text-darkPrimaryText">
                            Category
                        </th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-lightPrimaryText dark:text-darkPrimaryText">
                            View
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {allProduct.map(product => (
                        <tr
                            key={product._id}
                            className="even:bg-lightCardSecondary even:dark:bg-darkCardSecondary hover:bg-lightCardHover hover:dark:bg-darkCardHover"
                        >
                            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                {product.name}
                            </td>
                            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                {product.price}
                            </td>
                            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                {product.category}
                            </td>
                            <td
                                className="border border-gray-300 dark:border-gray-600 px-4 py-2 cursor-pointer hover:underline"
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
