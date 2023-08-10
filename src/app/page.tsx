import Image from 'next/image'
import { allProposals, Proposal } from "contentlayer/generated";
import ProposalCard from '@/components/proposalcard';
import { compareDesc, format, parseISO } from "date-fns";

export default function Home() {

  const proposals =allProposals.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <main className='max-w-6xl mx-auto bg-white'>
      <div className=''>
        {proposals.map((proposal,idx) => (
          <ProposalCard key={idx} title={proposal.title} description={proposal.description} date={proposal.date}/>
        ))}
      </div>
    </main>
  )
}
