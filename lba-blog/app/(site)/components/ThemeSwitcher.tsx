'use client'

import {useTheme} from 'next-themes';
import { useState, useEffect } from "react";
// import * as Switch from '@radix-ui/react-switch';
import { MdDarkMode } from 'react-icons/md';
import { FaSun } from 'react-icons/fa';

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => { setMounted(true) }, []);

    if (!mounted) {
        return null;
    }

    return (
        <>
            <div className="fixed right-10 duration-100 dark:bg-slate-800 bg-grap-100 rounded">
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
        </>
    )
};

export default ThemeSwitcher;