// Being built by Daniel

export default function Footer() {
    return (
        <div className="flex grid grid-cols-9  bg-[#E0F2FF] py-8 px-14">
            <div className="flex-none mr-10 col-span-2">
                <img src=""></img>
                <h1 className='font-bold'>LBA</h1>
            </div>
            <div className="flex-none mr-10 col-span-1">
                <h1 className='font-bold mb-7'>Pages</h1>
                <div className="">
                    <p className="mt-3">NFT</p>
                    <p className="mt-3">Team</p>
                    <p className="mt-3">Blog</p>
                    <p className="mt-3">Demo</p>
                </div>
            </div>
            <div className="flex-none mr-10 col-span-1">
                <h1 className='font-bold mb-6'>About</h1>
                <div className="">
                    <p className="mt-3">Blog</p>
                    <p className="mt-3">Main Website</p>
                    <p className="mt-3">UI/UX Design</p>
                </div>
            </div>
            <div className="flex-none mr-10 col-span-3">
                <h1 className='font-bold mb-6'>Contact</h1>
                <div className="">
                    <p className="mt-3">(406) 555-0120</p>
                    <p className="mt-3 ">Lassondreblockchain@contact.com</p>
                    <p className="mt-3">Toronto, Ontario</p>
                </div>
            </div>
            <div className="flex-none mr-10 col-span-2">
                <h1 className='font-bold mb-6'>Social Media</h1>
            </div>
        </div>
    );
}