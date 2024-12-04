import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Lottie from 'lottie-react';
import error from '../assets/404.json';
function Error() {
    return (
        <Section className={'prose max-w-none fixed inset-0 '}>
            <div className="flex z-10 flex-col items-center justify-center h-screen">
                <Lottie animationData={error} loop={true} />
                <p className="text-lg mb-3 mt-0">
                    Sorry, the page you are looking for does not exist.
                </p>
                <Link to="/" className="underline">
                    Go back to Home
                </Link>
            </div>
        </Section>
    );
}

export default Error;
