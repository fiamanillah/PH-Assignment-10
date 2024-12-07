import { useEffect, useState } from 'react';
import Section from '../components/Section';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import loader4 from '../assets/loader4.json';
import blank from '../assets/blank.json';
import Lottie from 'lottie-react';
import Button from '../components/Button';
import { IoEyeOutline } from 'react-icons/io5';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import Swal from 'sweetalert2';
export default function MyProducts() {
    const { user } = useAuth();
    const [allProduct, setAllProduct] = useState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handleDelete(prodId) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then(result => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Deleted!',
                    text: 'Your file has been deleted.',
                    icon: 'success',
                });

                (async () => {
                    try {
                        const response = await fetch(
                            `${import.meta.env.VITE_API_URL}/delete/${prodId}`,
                            {
                                method: 'DELETE',
                            }
                        );

                        if (!response.ok) {
                            const error = await response.json();
                            throw new Error(error.message || 'Failed to add coffee');
                        } else if (response.ok) {
                            const data = await response.json();
                            console.log(data);
                            if (data.acknowledged) {
                                const updatedCoffees = allProduct.filter(
                                    coffee => coffee._id !== prodId
                                );
                                console.log(updatedCoffees);

                                setAllProduct(updatedCoffees);
                            }
                        }
                    } catch (error) {
                        console.error('Error:', error);
                    }
                })();
            }
        });
    }

    useEffect(() => {
        async function fetchAllData() {
            try {
                setLoading(true);
                const response = await fetch(`${import.meta.env.VITE_API_URL}/myprod/${user?.uid}`);
                const allProductData = await response.json();
                console.log(allProductData);
                setAllProduct(allProductData);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        }

        if (user) {
            fetchAllData();
        }
    }, [user]);

    if (loading) {
        return (
            <Section className={'flex justify-center items-center min-h-[80vh]'}>
                <Lottie animationData={loader4} className="w-40" />;
            </Section>
        );
    }

    if (!allProduct || allProduct.length === 0) {
        return (
            <Section className={'flex justify-center items-center min-h-[80vh]'}>
                <Lottie animationData={blank} className="w-40" />;<span>No product found</span>
            </Section>
        );
    }

    return (
        <Section>
            <h1 className='m-5'>My Products</h1>
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
                                className="bg-info"
                                onClick={() => {
                                    navigate(`/details/${product._id}`);
                                }}
                            >
                                <IoEyeOutline />
                            </Button>
                            <Button
                                className="bg-accent"
                                onClick={() => {
                                    navigate(`/edit/${product._id}`);
                                }}
                            >
                                <FaEdit />
                            </Button>
                            <Button
                                className="bg-danger"
                                onClick={() => {
                                    handleDelete(product._id);
                                }}
                            >
                                <MdDeleteOutline />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
