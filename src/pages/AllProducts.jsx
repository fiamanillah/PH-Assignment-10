import { useEffect, useState } from 'react';
import Section from '../components/Section';
import { useNavigate } from 'react-router-dom';
import blank from '../assets/blank.json';
import Lottie from 'lottie-react';
import Button from '../components/Button';
import loader4 from '../assets/loader4.json';

export default function AllProducts() {
    const [allProduct, setAllProduct] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);
    const [isSorted, setIsSorted] = useState(false);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        (async function fetchAllData() {
            try {
                setLoading(true);
                const response = await fetch(`${import.meta.env.VITE_API_URL}/all-products`);
                const allProductData = await response.json();
                setAllProduct(allProductData);
            } catch (error) {
                console.error('Error fetching all products:', error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    useEffect(() => {
        (async function fetchSortedData() {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/sorted-products`);
                const sortedData = await response.json();
                setSortedProducts(sortedData);
            } catch (error) {
                console.error('Error fetching sorted products:', error);
            }
        })();
    }, []);

    if (loading) {
        return (
            <Section className={'flex justify-center items-center min-h-[80vh]'}>
                <Lottie animationData={loader4} className="w-40" />
            </Section>
        );
    }

    if (!allProduct.length) {
        return (
            <Section className={'flex justify-center items-center min-h-[80vh]'}>
                <Lottie animationData={blank} className="w-40" />
                <span>No product found</span>
            </Section>
        );
    }

    return (
        <Section>
            <Button
                className="bg-accent my-4"
                onClick={() => {
                    setIsSorted(!isSorted);
                }}
            >
                {isSorted ? 'Show All Products' : 'Sort'}
            </Button>
            <table className="min-w-full w-full rounded-xl overflow-hidden bg-lightCard dark:bg-darkCard text-lightPrimaryText dark:text-darkPrimaryText">
                <thead className="bg-primary">
                    <tr>
                        <th className="px-4 py-4 text-darkPrimaryText">Name</th>
                        <th className="px-4 py-4 text-darkPrimaryText">Price ($)</th>
                        <th className="px-4 py-4 text-darkPrimaryText">Category</th>
                        <th className="px-4 py-4 text-darkPrimaryText">View</th>
                    </tr>
                </thead>
                <tbody>
                    {(isSorted ? sortedProducts : allProduct).map(product => (
                        <tr
                            key={product._id}
                            className="even:bg-lightCardSecondary even:dark:bg-darkCardSecondary hover:bg-lightCardHover hover:dark:bg-darkCardHover"
                        >
                            <td className="px-4 py-2">{product.name}</td>
                            <td className="px-4 py-2">{product.price}</td>
                            <td className="px-4 py-2">{product.category}</td>
                            <td
                                className="px-4 py-2 cursor-pointer hover:underline"
                                onClick={() => navigate(`/details/${product._id}`)}
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
