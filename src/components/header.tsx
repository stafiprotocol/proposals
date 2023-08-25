'use client';

import * as React from 'react';
import Link from 'next/link';
import { StaFiIcon,GithubIcon,DiscordIcon } from './icons';

const Header = () => {

  return(
    <div className='bg-white p-4 sticky top-0 w-full z-10'>
      <div className='max-w-6xl mx-auto'>
          <div className='flex items-center justify-center space-x-3'>
            <Link href='/'>
              <StaFiIcon/>
            </Link>
            <Link href='/'>
              <div className='text-xl font-bold'>
                StaFi Protocol
              </div>
            </Link>
            <div className='grow'></div>
            <div className='flex items-center justify-center space-x-8'>
              <Link href='https://discord.gg/Up6vdp8fWx' target='_blank'>
                <div className='w-5 h-5'>
                  <DiscordIcon/>
                </div>
              </Link>
              <Link href='https://github.com/stafiprotocol/proposals' target='_blank'>
                <div className='w-5 h-5'>
                  <GithubIcon/>
                </div>
              </Link>
            </div>
          </div>
      </div>
    </div>
  )

}

export default Header;