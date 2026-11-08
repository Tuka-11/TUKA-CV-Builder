import Image from 'next/image';

import Link from "next/link";

export default function Header() {
  return (
    <header className=' flex w-100% py-2 bg-background justify-between items-center px-15 border-b-1 border-footer-text relative' >
      <div className='flex gap-5 items-center' >
        <Image 
          src="/Logo.PNG" 
          alt="Logo" 
          width={50} 
          height={50} 
        />
        <h2 className='text-amber-50 font-bold text-2xl'>TUKA</h2>
      </div>
      <div className='flex gap-20 text-xl text-paragraph text-gray-500'>
        <button className='cursor-pointer'>Templates</button>
        <button className='cursor-pointer'>Features</button>
        <button className='cursor-pointer'>Pricing</button>
      </div>
      <div className='flex gap-15 text-lg font-bold '>
        <Link href="/builder" className='bg-green-600 px-10 py-2 rounded-2xl cursor-pointer'>CV BUILDER</Link>
      </div>
    </header>
  );
}