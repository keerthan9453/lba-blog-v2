import React from 'react';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
    return (
        <>
            <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
                <div className='container max-w-7xl mx-auto w-full flex justify-between items-center'>
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