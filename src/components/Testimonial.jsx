import Section from './Section';

export default function Testimonial() {
    return (
        <Section>
            <div
                className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6"
                id="testimonials"
            >
                <div className="mx-auto max-w-screen-sm">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
                        What Our Customers Say
                    </h2>
                    <p className="mb-8 font-light lg:mb-16 sm:text-xl">
                        Discover how our high-quality sports gear has transformed the performance
                        and experiences of our valued customers.
                    </p>
                </div>
                <div className="grid mb-8 lg:mb-12 lg:grid-cols-2 rounded-2xl overflow-hidden border-2 border-lightCardSecondary dark:border-darkCardSecondary">
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-lightCard border-b border-gray-200 md:p-12 lg:border-r dark:bg-darkCard dark:border-gray-700">
                        <blockquote className="mx-auto mb-8 max-w-2xl">
                            <h3 className="text-lg font-semibold">Enhanced my training sessions</h3>
                            <p className="my-4">
                                The football I purchased has been a game-changer for my practice
                                sessions. Excellent grip and durability!
                            </p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img
                                className="w-9 h-9 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                                alt="profile picture"
                            />
                            <div className="space-y-0.5 font-medium text-left">
                                <div>James Smith</div>
                                <div className="text-sm font-light">Football Enthusiast</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-lightCard border-b border-gray-200 md:p-12 dark:bg-darkCard dark:border-gray-700">
                        <blockquote className="mx-auto mb-8 max-w-2xl">
                            <h3 className="text-lg font-semibold">Best racket for my matches</h3>
                            <p className="my-4">
                                The tennis racket I bought was lightweight and offered excellent
                                control. Highly recommended for pros!
                            </p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img
                                className="w-9 h-9 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                                alt="profile picture"
                            />
                            <div className="space-y-0.5 font-medium text-left">
                                <div>Emily Johnson</div>
                                <div className="text-sm font-light">Tennis Player</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-lightCard border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-darkCard dark:border-gray-700">
                        <blockquote className="mx-auto mb-8 max-w-2xl">
                            <h3 className="text-lg font-semibold">Reliable and durable gear</h3>
                            <p className="my-4">
                                The hiking boots I purchased made my trekking trip comfortable and
                                safe. Excellent quality!
                            </p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img
                                className="w-9 h-9 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                                alt="profile picture"
                            />
                            <div className="space-y-0.5 font-medium text-left">
                                <div>Priya Sharma</div>
                                <div className="text-sm font-light">Adventure Seeker</div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-lightCard border-gray-200 md:p-12 dark:bg-darkCard dark:border-gray-700">
                        <blockquote className="mx-auto mb-8 max-w-2xl">
                            <h3 className="text-lg font-semibold">Perfect fit and comfort</h3>
                            <p className="my-4">
                                The running shoes I bought provided great support and fit. Ideal for
                                long-distance runners like me.
                            </p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img
                                className="w-9 h-9 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                                alt="profile picture"
                            />
                            <div className="space-y-0.5 font-medium text-left">
                                <div>Ahmed Khan</div>
                                <div className="text-sm font-light">Marathon Runner</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </Section>
    );
}
