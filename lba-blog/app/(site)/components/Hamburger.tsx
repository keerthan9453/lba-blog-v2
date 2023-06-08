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


const MobileHamburgerSheetServer = () => (
    <div className="fixed top-0 right-0 p-4 md:hidden ">
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


const MobileHamburgerSheet = () => {

        return <MobileHamburgerSheetServer />;
 };

export default MobileHamburgerSheet;
