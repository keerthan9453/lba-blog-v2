import React from "react";
import Image from 'next/image';
import marker from '../components/lib/marker.gif';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./Sheets";

// Server Component
const MobileHamburgerSheetServer = () => (
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
);

// Client Component
const MobileHamburgerSheetClient = () => {
    const handleBlogHomeClick = () => {
        import('next/router').then((router) => {
            router.default.push("../page.tsx");
        });
    };

    return (
        <div className="fixed top-0 right-0 p-4 md:hidden">
            <Sheet>
                <SheetTrigger>
                    <Image src={marker} alt="logo" width={100} height={100} />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>LBA-Main Website</SheetTitle>
                        <SheetTitle onClick={handleBlogHomeClick}>Blog Home</SheetTitle>
                        <SheetTitle>About Us</SheetTitle>
                        <SheetTitle>Contact Us</SheetTitle>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
};

// Conditional rendering based on the environment
const MobileHamburgerSheet = () => {
    if (typeof window !== 'undefined') {
        // Client-side rendering
        return <MobileHamburgerSheetClient />;
    } else {
        // Server-side rendering
        return <MobileHamburgerSheetServer />;
    }
};

export default MobileHamburgerSheet;
