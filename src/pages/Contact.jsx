import { useEffect, useRef, useState } from 'react';
import { useForm } from '@formspree/react';
import Section from '../components/Section';
import Button from '../components/Button';
import contact from '../assets/contact.svg';

function Contact() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [state, handleSubmit] = useForm('xdkogerb');

    useEffect(() => {
        // Flag to check if the component is still mounted
        let isMounted = true;

        if (state.submitting && isMounted) {
            setLoading(true);
        }

        if (state.succeeded && isMounted) {
            setLoading(false);
            if (nameRef.current) nameRef.current.value = '';
            if (emailRef.current) emailRef.current.value = '';
            if (messageRef.current) messageRef.current.value = '';
        }

        // Cleanup to avoid state updates after the component is unmounted
        return () => {
            isMounted = false;
        };
    }, [state]);

    return (
        <Section>
            <div>
                <div className="flex flex-col max-w-screen-xl py-5 px-[1%] mx-auto text-center text-white">
                    <h1>Contact Us</h1>
                    <p>
                        If you have any questions or need assistance, please fill out the form
                        below:
                    </p>
                </div>
            </div>
            <div className="flex flex-col max-w-screen-xl py-5 px-[1%] mx-auto text-center text-white">
                <div className="w-full mx-auto p-5 flex laptop-xl:flex-col items-center justify-between gap-4 md-p:flex-col">
                    <form
                        onSubmit={handleSubmit}
                        className="mt-5 w-full text-black text-left font-bold basis-1/2"
                    >
                        <div className="mb-4">
                            <label className="block mb-2" htmlFor="name">
                                Name:
                            </label>
                            <input
                                type="text"
                                ref={nameRef}
                                name="name"
                                placeholder="Your Name"
                                required
                                className="bg-lightCardSecondary border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-darkCardSecondary dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-accent dark:focus:border-accent"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2" htmlFor="email">
                                Email:
                            </label>
                            <input
                                type="email"
                                name="email"
                                ref={emailRef}
                                placeholder="Your Email"
                                required
                                className="bg-lightCardSecondary border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-darkCardSecondary dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-accent dark:focus:border-accent"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2" htmlFor="message">
                                Message:
                            </label>
                            <textarea
                                ref={messageRef}
                                rows="5"
                                name="message"
                                placeholder="Your Message"
                                required
                                className="bg-lightCardSecondary border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-darkCardSecondary dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-accent dark:focus:border-accent text-lightPrimaryText dark:text-darkPrimaryText"
                            ></textarea>
                        </div>
                        <Button type="submit" className="bg-accent text-white" disabled={loading}>
                            {loading ? 'Submitting...' : 'Submit'}
                        </Button>
                    </form>
                    <div className="basis-1/2">
                        <img src={contact} alt="" />
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Contact;
