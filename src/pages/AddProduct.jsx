import { useState } from 'react';
import InputField from '../components/InputField';
import Section from '../components/Section';
import { PiImage } from 'react-icons/pi';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineAlternateEmail } from 'react-icons/md';

import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';

export default function AddProduct() {
    const { user } = useAuth();
    // const [name, setName] = useState();
    const [photoUrl, setPhotoUrl] = useState('');

    console.log(user);

    return (
        <Section>
            <h1 className="text-center">Add Product</h1>
            <h3>General Information</h3>
            <div className="flex ">
                <div className="flex justify-between gap-3 my-4 bg-lightCard dark:bg-darkCard p-3 rounded-2xl basis-2/3">
                    <div className="flex items-center text-2xl gap-2 text-lightPrimaryText dark:text-darkPrimaryText bg-lightCardSecondary dark:bg-darkCardSecondary py-2 px-4 rounded-xl">
                        <CgProfile /> <span>{user?.displayName}</span>
                    </div>
                    <div className="flex items-center text-2xl gap-2 text-lightPrimaryText dark:text-darkPrimaryText bg-lightCardSecondary dark:bg-darkCardSecondary py-2 px-4 rounded-xl">
                        <MdOutlineAlternateEmail />
                        <span>{user?.email}</span>
                    </div>
                </div>
                <div className="my-4  p-3 flex justify-end basis-1/3">
                    <Button className="bg-accent text-darkPrimaryText">Add Product</Button>
                </div>
            </div>
            <div className="flex gap-3">
                <div className="grid grid-cols-2 gap-3 basis-2/3 bg-lightCard dark:bg-darkCard p-3 rounded-2xl">
                    <InputField
                        label={'Product Name'}
                        placeholder={'Enter the product name'}
                        name={'name'}
                    />
                    <div>
                        <label htmlFor="sports-equipment">Choose a category:</label>
                        <select
                            className="bg-lightCardSecondary border border-gray-300 rounded-lg block w-full p-2.5 dark:bg-darkCardSecondary dark:border-gray-600 dark:placeholder-gray-400 outline-none text-lightPrimaryText dark:text-darkPrimaryText"
                            id="sports-equipment"
                            name="sports-equipment"
                            defaultValue={''}
                        >
                            <option value="" disabled>
                                Select a category
                            </option>
                            <option value="balls">Balls</option>
                            <option value="rackets">Rackets</option>
                            <option value="bats">Bats</option>
                            <option value="protective-gear">Protective Gear</option>
                            <option value="footwear">Footwear</option>
                            <option value="clothing">Clothing</option>
                            <option value="fitness-equipment">Fitness Equipment</option>
                            <option value="water-sports">Water Sports Equipment</option>
                            <option value="winter-sports">Winter Sports Equipment</option>
                            <option value="accessories">Accessories</option>
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
                        ></textarea>
                    </div>
                    <InputField
                        label={'Price'}
                        placeholder={'Enter the product price'}
                        name={'price'}
                    />
                    <InputField
                        type={'number'}
                        label={'Processing Time'}
                        placeholder={'Enter the processing time'}
                        name={'price'}
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
                        min={1}
                        max={5}
                    />
                    <InputField
                        type={'text'}
                        label={'Customizations'}
                        placeholder={'Enter the customization'}
                        name={'customization'}
                    />
                </div>
            </div>
        </Section>
    );
}
