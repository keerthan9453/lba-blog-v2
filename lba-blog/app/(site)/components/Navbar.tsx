'use client'

import React from 'react';
import Link from 'next/link';
// import ThemeSwitcher from './ThemeSwitcher';
import Image from 'next/image';
import marker from '../components/lib/marker.gif';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./Sheets";

import { useTheme } from 'next-themes';
import { useState, useEffect } from "react";
// import * as Switch from '@radix-ui/react-switch';
import { MdDarkMode } from 'react-icons/md';
import { FaSun } from 'react-icons/fa';

const Navbar = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => { setMounted(true) }, []);

    if (!mounted) {
        return null;
    }

    return (
        <>
            <div className="container mx-auto sm:px-4">
                <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
                    <div className='container mx-auto flex justify-between items-center'>
                        
                        <div>
                            <Link
                                href="/"
                                className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent"
                            >LBA - Blog</Link>
                        </div>
                        <div>
                            <div className="right-10 duration-100 dark:bg-slate-800 bg-grap-100 rounded">
                                {/* light button */}
                                <button
                                    onClick={() => setTheme("light")}
                                    className="w-8 h-8 leading-9 text-x1 rounded-full m-1 text-sky-600">
                                    <FaSun className="mx-2" target="_blank" />
                                </button>

                                {/* dark button */}
                                <button
                                    onClick={() => setTheme("dark")}
                                    className="w-8 h-8 leading-9 text-x1 rounded-full m-1 text-sky-600">
                                    <MdDarkMode className="mx-2" target="_blank" />
                                </button>
                            </div>
                        </div>
                        <div className="top-0 right-0 p-4 md:hidden">
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar