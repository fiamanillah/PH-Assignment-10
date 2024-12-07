import { useNavigate, useParams } from 'react-router-dom';
import Section from '../components/Section';
import { useEffect, useState } from 'react';

export default function ProductDetails() {
    const { prodId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState();
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/details/${prodId}`);

                if (!response.ok) {
                    const error = await response.json();
                    throw new Error(error.message || 'Failed to add coffee');
                }

                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error:', error);
                navigate('/404');
            }
        })();
    }, [prodId, navigate]);

    console.log(product);

    return (
        <Section>
            <div>
                <div className="bg-lightCard dark:bg-darkCard p-3 rounded-2xl flex gap-3">
                    <div className="basis-2/5">
                        <img className="rounded-xl" src={product?.photoUrl} alt="" />
                    </div>
                    <div className="basis-3/5">
                        <h1>{product?.name}</h1>
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
                        <div className="bg-lightCardSecondary dark:bg-darkCardSecondary p-2 rounded-xl">
                            <strong>Description</strong>
                            <p>{product?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
