import React from 'react';
// import next/theme
import { useTheme } from 'next-themes';

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-9 bg-[#0c4f80] dark:bg-black py-8 px-4 md:px-14">
      <div className="flex-none mr-10 col-span-2 md:col-span-1 md:row-start-1 md:row-end-3">
        <h1 className="font-bold">LBA</h1>
      </div>
      <div className="flex-none mr-10 col-span-5 md:col-span-3">
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="font-bold mb-6 col-span-3">About</h1>
            <div>
              <p className="mt-3">Blog</p>
              <p className="mt-3">Main Website</p>
              <p className="mt-3">UI/UX Design</p>
            </div>
          </div>
          <div className="md:mr-20 col-span-2">
            <h1 className="font-bold mb-6">Pages</h1>
            <div>
              <p className="mt-3">NFT</p>
              <p className="mt-3">Team</p>
              <p className="mt-3">Blog</p>
              <p className="mt-3">Demo</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-none md:ml-20 col-span-2 md:col-span-4">
        <h1 className="font-bold mb-6">Contact</h1>
        <div>
          <p className="mt-3">(406) 555-0120</p>
          <p className="mt-3">Lassondreblockchain@contact.com</p>
          <p className="mt-3">Toronto, Ontario</p>
        </div>
      </div>
      <div className="flex-none mr100 col-span-2 md:col-span-1">
        <h1 className="font-bold mb-6">Social Media</h1>
      </div>
    </div>
  );
}

export default Footer;
