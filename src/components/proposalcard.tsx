import * as React from 'react';
import Status from '@/components/status';
import { IpfsIcon,SnapshotIcon,ArrowIcon } from '@/components/icons';
import Link from 'next/link';
import jsonDataList from '../../cid/ipfs-sips/all-hash.json';


interface ProposalCard {
    title: string;
    description: string;
    status: number;
    snapshotlink: string;
    url: string;
    date: string;
}

const ProposalCard = (params: ProposalCard) => {

  const matchedItem = jsonDataList.find(item => `/proposal/${item.name}` === params.url);
  const hashlink = matchedItem ? matchedItem.hash : '';

    return ( 
      <div className='max-w-4xl mx-auto'>
        <div className='block p-6 bg-white rounded-xl'>
          <div className='mb-6 flex justify-center items-center space-x-2'>
            <Status status={params.status}/>
            <div className='grow'>
            </div>
          </div>
          <Link href={`${params.url}`}>
            <div className='relative break-words leading-7'>
              <h3 className='inline text-3xl font-title'>
                {params.title}
              </h3>
            </div>
            <p className='mt-3 line-clamp-2 break-words text-lg text-[#8A939C] leading-relaxed'>
              {params.description}
            </p>
          </Link>
          <div className='grid grid-cols-2 gap-4 mt-4'>
            { hashlink && <Link href={`https://ipfs.io/ipfs/${hashlink}`} target='_blank'>
              <div className='flex items-center space-x-4 bg-[#E9EAEE]/30 p-1.5 rounded-md'>
                <div className='rounded-full bg-[#E9EAEE] p-1.5'>
                  <div className='w-6 h-6'>
                    <IpfsIcon/>
                  </div>
                </div>
                <p className='text-black text-lg'>
                  IPFS
                </p>
                <div className='grow'>
                </div>
                <div className='pr-2'>
                  <ArrowIcon/>
                </div>
              </div>
            </Link>}
            { params.snapshotlink && <Link href={`${params.snapshotlink}`} target='_blank'>
              <div className='flex items-center space-x-4 bg-[#E9EAEE]/30 p-1.5 rounded-md'>
                <div className='rounded-full bg-[#E9EAEE] py-1.5 px-2'>
                  <div className='w-5 h-6'>
                    <SnapshotIcon/>
                  </div>
                </div>
                <p className='text-black text-lg'>
                  Snapshot
                </p>
                <div className='grow'>
                </div>
                <div className='pr-2'>
                  <ArrowIcon/>
                </div>
              </div>
            </Link>}
          </div>
        </div>
      </div>
    )

}


export default ProposalCard;