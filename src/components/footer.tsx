'use client';
import Link from "next/link";
import Image from "next/image";
function Footer() {
    return (
        <div>
            <section>
                <footer className="bg-black text-gray-300 py-16 h-20">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            {/* Logo or Brand Name */}
                            <Link href="/">
                                <div className=" text-white dark:text-white text-3xl font-bold mb-10">Muneeb<span className="text-blue-600">Blog</span></div>
                            </Link>
                            {/* Navigation Links */}
                            <div className="flex space-x-6 mb-4 md:mb-0">
                                <a
                                    href="#"
                                    className="hover:text-blue-500 transition duration-300"
                                >
                                    Home
                                </a>
                                <a
                                    href="#"
                                    className="hover:text-blue-500 transition duration-300"
                                >
                                    About
                                </a>
                                <a
                                    href="#"
                                    className="hover:text-blue-500 transition duration-300"
                                >
                                    Contact
                                </a>
                                <a
                                    href="#"
                                    className="hover:text-blue-500 transition duration-300"
                                >
                                    Privacy Policy
                                </a>
                            </div>

                        </div>
                    </div>
                </footer>
            </section>

            <footer className="bg-black text-gray-300 font-sans dark:bg-black">
                <div className="container px-6 py-12 mx-auto">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                        <div className="sm:col-span-2">
                            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
                                Subscribe our newsletter to get an update.
                            </h1>

                            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                                <input
                                    id="email"
                                    type="text"
                                    className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                                    placeholder="Email Address"
                                />

                                <button className="w-full px-6 py-2.5 text-sm font-bold tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold text-gray-800 dark:text-white">
                                Quick Link
                            </p>

                            <div className="flex flex-col items-start mt-5 space-y-2">
                                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                                    Home
                                </p>
                                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                                    Who We Are
                                </p>
                                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                                    Our Philosophy
                                </p>
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold text-gray-800 dark:text-white">
                                Industries
                            </p>

                            <div className="flex flex-col items-start mt-5 space-y-2">
                                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                                    Retail & E-Commerce
                                </p>
                                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                                    Information Technology
                                </p>
                                <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                                    Finance & Insurance
                                </p>
                            </div>
                        </div>
                    </div>

                    <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />

                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="flex flex-1 gap-4 hover:cursor-pointer">
                            <Image
                                src={"https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"}
                                width="130"
                                height="110"
                                alt="f"
                            />
                            <Image
                                src={"https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"}
                                width="130"
                                height="110"
                                alt="f"
                            />
                        </div>

                        <div className="flex gap-4 hover:cursor-pointer">

                            <Image
                                src={"https://www.svgrepo.com/show/303114/facebook-3-logo.svg"}
                                width="30"
                                height="30"
                                alt="f"
                            />
                            
                            <Image
                                src={"https://www.svgrepo.com/show/303115/twitter-3-logo.svg"}
                                width="30"
                                height="30"
                                alt="f"
                            />
                           
                            <Image
                                src={"https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"}
                                width="30"
                                height="30"
                                alt="f"
                            />
                           
                            <Image
                                src={"https://www.svgrepo.com/show/94698/github.svg"}
                                width="30"
                                height="30"
                                alt="f"
                            />
                            
                            <Image
                                src={"https://www.svgrepo.com/show/22037/path.svg"}
                                width="30"
                                height="30"
                                alt="f"
                            />
                            
                            <Image
                                src={"https://www.svgrepo.com/show/28145/linkedin.svg"}
                                width="30"
                                height="30"
                                alt="f"
                            />
                           
                            <Image
                                src={"https://www.svgrepo.com/show/22048/dribbble.svg"}
                                width="30"
                                height="30"
                                alt="f"
                            />
                        </div>
                    </div>
                    <p className="text-blue-500 font-sans p-8 text-start md:text-center md:text-lg md:p-4">
                        © 2025 You Company Inc. All rights reserved.
                    </p>
                </div>
            </footer>
            
        </div>
    );
}
export default Footer;
