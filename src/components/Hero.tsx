import banner from "../assets/banner-stack.png"
const Hero = () => {
    return (
        <section className="bg-white">
            <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-6xl items-center px-6">

                {/* Left */}
                <div className="w-full md:w-1/2">

                    <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 md:text-5xl">
                        Build Your Ideal
                        <br />

                        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className="mt-5 max-w-md text-sm leading-5 text-gray-500">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that
                        fits your next project.
                    </p>

                    <div className="mt-7 flex gap-2">
                        <button className="rounded-md bg-gradient-to-r from-orange-500 to-pink-500 px-3 py-2 text-[12px] font-medium text-white shadow-sm">
                            Explore Technologies
                        </button>

                        <button className="rounded-md border border-gray-200 px-6 py-2 text-[12px] text-gray-600">
                            Learn More
                        </button>
                    </div>

                </div>

                {/* Right */}
                <div className="hidden w-1/2 items-center justify-center md:flex">
                    <img
                        src={banner}
                        alt="Development stack"
                    
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;