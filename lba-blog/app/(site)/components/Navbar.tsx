import React from 'react';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';
import Image from 'next/image';
import marker from '../components/lib/marker.gif';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./Sheets";

const Navbar = () => {
    return (
        <>
            <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
                <div className='container max-w-7xl mx-auto w-full flex justify-between items-center'>
                    <div className="fixed top-0 right-0 p-4 md:hidden">
                        <Sheet>
                            <SheetTrigger>
                                <Image src={marker} alt="logo" width={100} height={100} />
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>LBA-Main Website</SheetTitle>
                                    <SheetTitle>Blog Home</SheetTitle>
                                    <SheetTitle>About Us</SheetTitle>
                                    <SheetTitle>Contact Us</SheetTitle>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                    <div>
                        <Link
                            href="/"
                            className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent"
                        >LBA - Blog</Link>
                    </div>
                    <ThemeSwitcher />
                </div>
            </div>
        </>
    )
}

export default Navbar