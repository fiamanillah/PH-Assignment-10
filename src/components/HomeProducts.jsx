import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Section from './Section';
import { useEffect, useState } from 'react';
import { IoEyeOutline } from 'react-icons/io5';

export default function HomeProducts() {
    const navigate = useNavigate();
    const [allProduct, setAllProduct] = useState();

    useEffect(() => {
        async function fetchAllData() {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/home-products`);
                const allProductData = await response.json();
                console.log(allProductData);
                setAllProduct(allProductData);
            } catch (error) {
                console.error('Error:', error);
            }
        }

        fetchAllData();
    }, []);
    return (
        <Section>
            <div className="mx-auto max-w-screen-sm text-center mt-8">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold">Latest Products</h2>
                <p className="mb-8 font-light lg:mb-16 sm:text-xl">
                    Explore our newest range of premium sports gear, designed to elevate your game
                    and provide unmatched performance and comfort.
                </p>
            </div>
            <div className="grid grid-cols-3 gap-2 tablet-lg:grid-cols-2 mobile-lg:grid-cols-1">
                {allProduct?.map(product => (
                    <div className="bg-lightCard dark:bg-darkCard p-3 rounded-xl" key={product._id}>
                        <img
                            className="h-[300px] w-full object-cover rounded-lg"
                            src={product?.photoUrl}
                            alt=""
                        />
                        <strong>{product.name}</strong>
                        <span className="flex items-center gap-2">
                            Category: {product?.category}
                        </span>
                        <span className="flex items-center gap-2">Price: {product?.price} $</span>
                        <span className="flex items-center gap-2">
                            Processing Time: {product?.time}
                        </span>
                        <span className="flex items-center gap-2">Rating: {product?.rating}</span>
                        <span className="flex items-center gap-2">
                            Customization: {product?.customization}
                        </span>

                        <div className="flex gap-3 py-3">
                            <Button
                                className="bg-accent flex items-center gap-2"
                                onClick={() => {
                                    navigate(`/details/${product._id}`);
                                }}
                            >
                                <IoEyeOutline /> Details
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
