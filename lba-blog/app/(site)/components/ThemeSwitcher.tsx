'use client'

import { useTheme } from "next-themes";
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

            {/* // <div className="flex items-center" style={{ display: 'flex', alignItems: 'center' }}>
        //     <label className="text-white text-[15px] leading-none pr-[15px]" htmlFor="airplane-mode">
        //         Light/Dark Mode
        //     </label>
        //     <Switch.Root
        //         className="w-[42px] h-[25px] bg-blackA9 rounded-full relative shadow-[0_2px_10px] shadow-blackA7 focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-black outline-none cursor-default"
        //         id="airplane-mode"
        //     >
        //         <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA7 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
        //     </Switch.Root>
        // </div> */}

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