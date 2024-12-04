import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Section from '../components/Section';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import InputField from '../components/InputField';
import PasswordInput from '../components/PasswordInput';
import { LiaSpinnerSolid } from 'react-icons/lia';

function LogInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const { loginWithGoogle, loginWithEmail, loading } = useAuth();

    const handleEmailLogin = async e => {
        e.preventDefault();
        try {
            await loginWithEmail(email, password);
            await navigate('/user-profile');
        } catch (error) {
            console.error('Failed to log in:', error.message);
        }
    };
    const handleGoogleLogin = async () => {
        try {
            await loginWithGoogle();
            navigate('/user-profile');
        } catch (error) {
            console.error('Registration error:', error.message);
        }
    };
    return (
        <Section>
            <div className="flex flex-col items-center justify-center px-6 py-8 h-screen mx-auto">
                
                <div className="w-full bg-lightCard rounded-lg shadow dark:border dark:border-darkCardSecondary md:mt-0 sm:max-w-md xl:p-0 dark:bg-darkCard dark:border-cardbg-darkCardSecondary">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2x">
                            Sign in to your account
                        </h1>

                        <button
                            className="flex items-center justify-center text-primary dark:text-darkPrimary gap-2 bg-lightCardSecondary border border-gray-300  rounded-lg w-full p-2.5 dark:bg-darkCardSecondary dark:border-gray-600 dark:placeholder-gray-40 "
                            onClick={handleGoogleLogin}
                        >
                            <FcGoogle className="text-2xl" />
                            Continue with Google
                        </button>

                        <form className="space-y-4 md:space-y-6" onSubmit={handleEmailLogin}>
                            <InputField
                                label="Your email"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required={true}
                            />

                            <PasswordInput
                                label="Your password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required={true}
                            />
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="term"
                                            aria-describedby="term"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-lightCardSecondary focus:ring-3 focus:ring-primary-300 dark:bg-darkCardSecondary dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                            required=""
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label
                                            htmlFor="term"
                                            className="text-babg-lightCardSecondary0 dark:text-gray-300"
                                        >
                                            Accept terms{' '}
                                        </label>
                                    </div>
                                </div>
                                <Link
                                    to={'/reset-password'}
                                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            {loading ? (
                                <Button
                                    type="button"
                                    className="w-full text-white bg-accent flex justify-center"
                                >
                                    <LiaSpinnerSolid className="animate-spin text-2xl" />
                                </Button>
                            ) : (
                                <Button type="submit" className="w-full text-white bg-accent">
                                    Sign in
                                </Button>
                            )}

                            <p className="text-sm font-light text-babg-lightCardSecondary0 dark:text-gray-400">
                                Don’t have an account yet?{' '}
                                <Link
                                    to={'/register'}
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Sign up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default LogInPage;
