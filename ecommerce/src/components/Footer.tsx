import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <div className='h-1/2 md:h-24 p-4 lg:p-20 xl:p-40 text-red-500 flex items-center justify-between'>
      <Link href="/" className='font-bold text-xl'>MASSIMO</Link>
      <p>All Rights Reserved.</p>
    </div>
  )
} 

export default Footer;