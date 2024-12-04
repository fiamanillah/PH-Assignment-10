import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../utils/firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    sendPasswordResetEmail,
    signOut,
    onAuthStateChanged,
    updateProfile,
} from 'firebase/auth';
import { toast } from 'react-toastify';
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const successToast = msg => {
        toast.success(msg);
    };

    const infoToast = msg => {
        toast.info(msg);
    };

    const errorToast = msg => {
        toast.error(msg);
    };

    const updateUserProfile = async (displayName, photoURL) => {
        if (auth.currentUser) {
            try {
                setLoading(true);
                await updateProfile(auth.currentUser, { displayName, photoURL });
                // Fetch the updated user data after profile update
                const updatedUser = auth.currentUser;
                setUser({ ...updatedUser, displayName, photoURL });
                successToast('Profile updated successfully');
            } catch (error) {
                console.error('Failed to update profile:', error);
                errorToast(error.message);
                throw error;
            } finally {
                setLoading(false);
            }
        } else {
            throw new Error('No user is logged in');
        }
    };

    // Sign up with email and password and update profile
    const registerWithEmail = async (email, password, displayName, photoURL) => {
        try {
            setLoading(true);
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // Update the user's profile with name and photo URL
            updateUserProfile(displayName, photoURL);
            setUser(userCredential.user);
            successToast('Successfully resgistered');
        } catch (error) {
            console.error('Registration Error:', error);
            errorToast(error.message);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const loginWithEmail = async (email, password) => {
        try {
            setLoading(true);
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
            successToast('Sussessfully logged in');
        } catch (error) {
            console.error('Login Error:', error);
            errorToast(error.message);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            setLoading(true);
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
            successToast('Sussessfully logged in');
        } catch (error) {
            console.error('Google Login Error:', error);
            errorToast(error.message);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const resetPassword = async email => {
        try {
            setLoading(true);
            await sendPasswordResetEmail(auth, email);
            infoToast('Passward reset email sent, please reset your password');
        } catch (error) {
            console.error('Password Reset Error:', error);
            errorToast(error.message);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        try {
            setLoading(true);
            await signOut(auth);
            infoToast('Logged out');
        } catch (error) {
            console.error('Logout Error:', error);
            errorToast(error.message);
            throw error;
        } finally {
            setUser(null);
            setLoading(false);
        }
    };

    // Track user authentication status
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                registerWithEmail,
                loginWithEmail,
                loginWithGoogle,
                resetPassword,
                logout,
                updateUserProfile,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
