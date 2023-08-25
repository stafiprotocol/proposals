'use client';

import * as React from 'react';
import Link from 'next/link';
import * as Separator from '@radix-ui/react-separator';

const Footer = () => {

  return(
    <div className='bg-white p-6 w-full bottom-0 left-0'>
      <div className='max-w-3xl mx-auto'>
        <p className='text-lg leading-5 text-black font-medium mt-2'>
          StaFi Protocol
        </p>
        <p className='text-base leading-5 text-black mt-2'>
          Liquid staking protocol for multiple POS blockchains.
        </p>
        <div className="flex h-5 items-center mt-4">
          <Link href='https://stafi.io?utm_source=proposal&utem_source=foot' target='_blank'>
            <div className="text-black text-base leading-5">Website</div>
          </Link>
          <Separator.Root
            className="bg-black data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
            decorative
            orientation="vertical"
          />
          <Link href='https://app.stafi.io?utm_source=proposal&utem_source=foot' target='_blank'>
            <div className="text-black text-[15px] leading-5">App</div>
          </Link>
          <Separator.Root
            className="bg-black data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
            decorative
            orientation="vertical"
          />
          <Link href='https://docs.stafi.io?utm_source=proposal&utem_source=foot' target='_blank'>
            <div className="text-balck text-base leading-5">Docs</div>
          </Link>
        </div>
      </div>   
    </div>
  )
}

export default Footer;