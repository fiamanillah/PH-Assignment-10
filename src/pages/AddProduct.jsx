import { useState } from 'react';
import InputField from '../components/InputField';
import Section from '../components/Section';
import { PiImage } from 'react-icons/pi';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import loader3 from '../assets/loader3.json';

import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import Lottie from 'lottie-react';
import { toast } from 'react-toastify';

export default function AddProduct() {
    const { user, loading } = useAuth();
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setdescription] = useState('');
    const [price, setPrice] = useState('');
    const [time, setTime] = useState('');
    const [rating, setRating] = useState('');
    const [customization, setCustomization] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');

    const successToast = msg => {
        toast.success(msg);
    };

    function clearInput() {
        setName('');
        setCategory('');
        setdescription('');
        setPrice('');
        setTime('');
        setRating('');
        setCustomization('');
        setPhotoUrl('');
    }

    async function handleAddCoffee(e) {
        e.preventDefault();

        // Input validation
        if (
            !name ||
            !category ||
            !price ||
            !description ||
            !time ||
            !rating ||
            !photoUrl ||
            !customization
        ) {
            toast.warn('Please fill out all fields!');
            return;
        }

        const coffeeData = {
            name,
            category,
            price: Number(price),
            description,
            time: Number(time),
            rating: Number(rating),
            photoUrl,
            customization,
            uid: user?.uid,
        };

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/add-prod`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(coffeeData),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Failed to add coffee');
            }

            const data = await response.json();
            console.log('Coffee added:', data);
            successToast('Product added successfully!');
            clearInput();
        } catch (error) {
            console.error('Error adding coffee:', error.message);
        }
    }

    return (
        <Section>
            <h1 className="text-center">Add Product</h1>
            <h3>General Information</h3>
            <div className="flex laptop-xl:flex-col-reverse ">
                <div className="flex justify-between gap-3 my-4 bg-lightCard dark:bg-darkCard p-3 rounded-2xl basis-2/3 mobile-sm:flex-col">
                    <div className="flex items-center text-2xl gap-2 text-lightPrimaryText dark:text-darkPrimaryText bg-lightCardSecondary dark:bg-darkCardSecondary py-2 px-4 rounded-xl ">
                        <CgProfile />{' '}
                        {loading ? (
                            <Lottie
                                animationData={loader3}
                                loop={true}
                                className="w-12 h-8 object-cover"
                            />
                        ) : (
                            <span>{user?.displayName}</span>
                        )}
                    </div>
                    <div className="flex items-center text-2xl gap-2 text-lightPrimaryText dark:text-darkPrimaryText bg-lightCardSecondary dark:bg-darkCardSecondary py-2 px-4 rounded-xl">
                        <MdOutlineAlternateEmail />
                        {loading ? (
                            <Lottie
                                animationData={loader3}
                                loop={true}
                                className="w-12 h-8 object-cover"
                            />
                        ) : (
                            <span>{user?.email}</span>
                        )}
                    </div>
                </div>
                <div className="my-4  p-3 flex justify-end basis-1/3">
                    <Button className="bg-accent text-darkPrimaryText" onClick={handleAddCoffee}>
                        Add Product
                    </Button>
                </div>
            </div>
            <div className="flex gap-3 laptop-xl:flex-col">
                <div className="grid grid-cols-2 gap-3 basis-2/3 bg-lightCard dark:bg-darkCard p-3 rounded-2xl">
                    <InputField
                        label={'Product Name'}
                        placeholder={'Enter the product name'}
                        name={'name'}
                        value={name}
                        onChange={e => {
                            setName(e.target.value);
                        }}
                        className={'laptop-xl:col-span-2'}
                    />
                    <div className="laptop-xl:col-span-2">
                        <label htmlFor="sports-equipment">Choose a category:</label>
                        <select
                            className="bg-lightCardSecondary border border-gray-300 rounded-lg block w-full p-2.5 dark:bg-darkCardSecondary dark:border-gray-600 dark:placeholder-gray-400 outline-none text-lightPrimaryText dark:text-darkPrimaryText"
                            id="sports-equipment"
                            name="sports-equipment"
                            value={category}
                            onChange={e => {
                                setCategory(e.target.value);
                            }}
                        >
                            <option value="" disabled>
                                Select a category
                            </option>
                            <option value="Balls">Balls</option>
                            <option value="Rackets">Rackets</option>
                            <option value="Bats">Bats</option>
                            <option value="Protective Gear">Protective Gear</option>
                            <option value="Footwear">Footwear</option>
                            <option value="Clothing">Clothing</option>
                            <option value="Fitness Equipment">Fitness Equipment</option>
                            <option value="Water Sports Equipment">Water Sports Equipment</option>
                            <option value="Winter Sports Equipment">Winter Sports Equipment</option>
                            <option value="Accessories">Accessories</option>
                        </select>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="sports-equipment-description">
                            Give description of the product:
                        </label>
                        <textarea
                            className="bg-lightCardSecondary border border-gray-300 rounded-lg block w-full p-2.5 dark:bg-darkCardSecondary dark:border-gray-600 dark:placeholder-gray-400 outline-none text-lightPrimaryText dark:text-darkPrimaryText"
                            name="sports-equipment-description"
                            id="sports-equipment-description"
                            rows="7"
                            placeholder="Write description..."
                            value={description}
                            onChange={e => {
                                setdescription(e.target.value);
                            }}
                        ></textarea>
                    </div>
                    <InputField
                        label={'Price'}
                        type={'number'}
                        placeholder={'Enter the product price'}
                        name={'price'}
                        value={price}
                        onChange={e => {
                            setPrice(e.target.value);
                        }}
                    />
                    <InputField
                        type={'number'}
                        label={'Processing Time'}
                        placeholder={'Enter the processing time'}
                        name={'time'}
                        value={time}
                        onChange={e => {
                            setTime(e.target.value);
                        }}
                    />
                    <InputField
                        type={'url'}
                        label={'Photo Url'}
                        placeholder={'Enter the photo url'}
                        name={'photo-url'}
                        className={'col-span-2'}
                        value={photoUrl}
                        onChange={e => {
                            setPhotoUrl(e.target.value);
                        }}
                    />
                </div>
                <div className="basis-1/3 bg-lightCard dark:bg-darkCard p-3 rounded-2xl">
                    <div className="min-h-[350px] bg-lightCardSecondary dark:bg-darkCardSecondary rounded-xl">
                        {photoUrl == '' && !photoUrl ? (
                            <div className="flex flex-col items-center justify-center min-h-[350px]">
                                <PiImage className="text-6xl text-lightPrimaryText dark:text-darkPrimaryText" />
                                <p className="w-3/4 text-center">
                                    Provide a image url in the photo url field
                                </p>
                            </div>
                        ) : (
                            <img
                                className="rounded-xl min-h-[350px] object-cover w-full"
                                src={photoUrl}
                            />
                        )}
                    </div>
                    <InputField
                        type={'number'}
                        label={'Rating'}
                        placeholder={'Enter rating'}
                        name={'rating'}
                        value={rating}
                        onChange={e => {
                            setRating(e.target.value);
                        }}
                    />
                    <InputField
                        type={'text'}
                        label={'Customizations'}
                        placeholder={'Enter the customization'}
                        name={'customization'}
                        value={customization}
                        onChange={e => {
                            setCustomization(e.target.value);
                        }}
                    />
                </div>
            </div>
        </Section>
    );
}
