import Image from 'next/image'
import { allProposals, Proposal } from "contentlayer/generated";
import ProposalCard from '@/components/proposalcard';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { compareDesc, format, parseISO } from "date-fns";

export default function Home() {

  const proposals =allProposals.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <main className='bg-[#E9EAEE]'>
      <Header/>
      <div className='px-16 pt-32 pb-16'>
        <div className='space-y-4'>
          {proposals.map((proposal,idx) => (
            <ProposalCard 
              key={idx} 
              title={proposal.title} 
              description={proposal.description} 
              status={proposal.status}
              date={proposal.date}/>
          ))}
        </div>
      </div>
      <Footer/>
      
    </main>
  )
}
