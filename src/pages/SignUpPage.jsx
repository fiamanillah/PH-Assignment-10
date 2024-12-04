import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Section from '../components/Section';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import InputField from '../components/InputField';
import PasswordInput from '../components/PasswordInput';
import { LiaSpinnerSolid } from 'react-icons/lia';
function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [error, setError] = useState('');

    const { loginWithGoogle, registerWithEmail, user, loading } = useAuth();
    const navigate = useNavigate();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    const handleRegister = async e => {
        e.preventDefault();

        // Validate password
        if (!passwordRegex.test(password)) {
            setError(
                'Password must be at least 8 characters long, contain an uppercase letter, a number, and a special character.'
            );
            return;
        }

        // Check if password and confirm password match
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            await registerWithEmail(email, password, displayName, photoURL);
            navigate('/user-profile');
            console.log(user);
        } catch (error) {
            console.error('Registration error:', error.message);
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
            <div className="flex flex-col items-center justify-center px-6 py-8  mx-auto">
                <div className="w-full bg-lightCard rounded-lg shadow dark:border dark:border-darkCardSecondary md:mt-0 sm:max-w-md xl:p-0 dark:bg-darkCard dark:border-cardbg-darkCardSecondary">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2x">
                            Create your account
                        </h1>

                        <button
                            className="flex items-center justify-center text-primary dark:text-darkPrimary gap-2 bg-lightCardSecondary border border-gray-300  rounded-lg w-full p-2.5 dark:bg-darkCardSecondary dark:border-gray-600 dark:placeholder-gray-40 "
                            onClick={handleGoogleLogin}
                        >
                            <FcGoogle className="text-2xl" />
                            Continue with Google
                        </button>

                        <form className="space-y-4 md:space-y-6" onSubmit={handleRegister}>
                            {error && <p className="!text-red-500 text-sm">{error}</p>}

                            <InputField
                                label="Your Name"
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your name"
                                value={displayName}
                                onChange={e => setDisplayName(e.target.value)}
                                required={true}
                            />

                            <InputField
                                label="Profile Photo URL"
                                type="url"
                                name="photoURL"
                                id="photoURL"
                                placeholder="https://example.com/photo.jpg"
                                value={photoURL}
                                onChange={e => setPhotoURL(e.target.value)}
                                required={true}
                            />

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
                            <PasswordInput
                                label="Confirm Password"
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="••••••••"
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
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
                                            required
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label
                                            htmlFor="term"
                                            className="text-babg-lightCardSecondary0 dark:text-gray-300"
                                        >
                                            Accept terms
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
                                    Sign Up
                                </Button>
                            )}

                            <p className="text-sm font-light text-babg-lightCardSecondary0 dark:text-gray-400">
                                Already have an account?{' '}
                                <Link
                                    to={'/login'}
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Log In
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default SignUpPage;
