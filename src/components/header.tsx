'use client';

import * as React from 'react';
import Link from 'next/link';
import { StaFiIcon } from './icons';

export const Header = () => {

  return(
    <div className='bg-white p-4 fixed w-full'>
      <div className='max-w-6xl mx-auto'>
        <Link href='/'>
          <div className='flex items-center justify-center space-x-2'>
            <StaFiIcon/>
            <div className='text-xl font-bold'>
              StaFi Protocol
            </div>
            <div className='grow'></div>
            <div className='text-xl font-bold'>
              github
            </div>
          </div>
        </Link>
      </div>
    </div>
  )

}

export default Header;