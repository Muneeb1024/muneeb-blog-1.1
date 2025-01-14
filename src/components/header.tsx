'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle";


function Header() {
    return (

        <nav className="wrapper1 bg-background/50 px-10 sticky top-0 backdrop-blur border-b border-blue-600 border-opacity-30 z-10">
            <div className="h-[70px] mx-auto flex justify-between items-center">

                <Link href="/">
                    <div className=" text-black dark:text-white text-3xl font-bold">Muneeb<span className="text-blue-600">Blog</span></div>
                </Link>
                <div className="hidden md:flex items-center gap-x-8">
                    <Link className="text-blue-600 hover:text-gray-400 py-2 hover:border-b-2 hover:border-blue-600 hover:font-semibold" href="/">
                        Home
                    </Link>
                    <Link className="text-blue-600 hover:text-gray-400 py-2 hover:border-b-2 hover:border-blue-600 hover:font-semibold" href="/about">
                        About
                    </Link>
                    <Link className="text-blue-600 hover:text-gray-400 py-2 hover:border-b-2 hover:border-blue-600 hover:font-semibold" href="/blog">
                        Blog
                    </Link>
                    <Link className="text-blue-600 hover:text-gray-400 py-2 hover:border-b-2 hover:border-blue-600 hover:font-semibold" href="/contact">
                        Contact
                    </Link>
                    <div className="flex items-center">
                        <Button className="mx-2 border hover:border-blue-500 bg-blue-500 text-white" variant="outline">
                            Login
                        </Button>
                        <Button className="mx-2 border hover:border-blue-500" variant="outline">
                            Signup
                        </Button>
                        <ModeToggle />
                    </div>
                </div>



                <div className="md:hidden">
                    <Sheet>
                        <span className="mx-2">
                            <ModeToggle />
                        </span>
                        <SheetTrigger>
                            <GiHamburgerMenu className="focus:outline-none" />
                        </SheetTrigger>

                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="text-black dark:text-white text-3xl font-bold my-4 ">Muneeb<span className="text-blue-600">Blog</span></SheetTitle>
                                <SheetDescription>
                                    <div className="flex flex-col gap-4">
                                        <Link
                                            className="hover:text-gray-400 hover:bg-red-400 p-2"
                                            href="/"
                                        >
                                            Home
                                        </Link>
                                        <Link
                                            className="hover:text-gray-400 hover:bg-black p-2"
                                            href="/about"
                                        >
                                            About
                                        </Link>
                                        <Link
                                            className="hover:text-gray-400 hover:bg-black p-2"
                                            href="/blog"
                                        >
                                            Blog
                                        </Link>
                                        <Link
                                            className="hover:text-gray-400 hover:bg-black p-2"
                                            href="/contact"
                                        >
                                            Contact
                                        </Link>
                                        <div>
                                            <Button className="mx-1" variant="outline">
                                                Login
                                            </Button>
                                            <Button className="mx-1" variant="outline">
                                                Signup
                                            </Button>
                                        </div>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                </div>

            </div>
        </nav>

    )
}

export default Header;