'use client';

import * as React from 'react';
import { IpfsIcon,SnapshotIcon } from './icons';

interface ProposalCard {
    title: string;
    description: string;
}

export const ProposalCard = (params: ProposalCard) => {
    return ( 
      <div className='max-w-4xl'>
        <div className='block p-3 text-skin-text sm:p-4'>
          <div className='relative mb-1 break-words pr-[80px] leading-7'>
            <h3 className='inline pr-2 text-3xl font-bold'>
              {params.title}
            </h3>
          </div>
          <p className='mb-2 line-clamp-2 break-words text-lg'>
            {params.description}
          </p>
          <div className='flex justify-center'>
            <div className='w-4 h-4'>
              <IpfsIcon/>
            </div>
            <SnapshotIcon/>
          </div>
        </div>
      </div>
    )

}

export default ProposalCard;