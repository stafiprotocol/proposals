import { allProposals, Proposal } from "contentlayer/generated";
import ProposalCard from '@/components/proposalcard';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { compareDesc } from "date-fns";

const Home = () => {

  const proposals = allProposals.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <main className='bg-[#E9EAEE] flex flex-col min-h-screen'>
      <Header/>
      <div className='px-16 mt-16 pb-16 flex-grow z-0'>
        <div className='space-y-8'>
          {proposals.map((proposal,idx) => (
            <ProposalCard 
              key={idx} 
              title={proposal.title} 
              description={proposal.description} 
              status={proposal.status}
              date={proposal.date}
              snapshotlink={proposal.snapshotlink || ''}
              url={proposal.url}/>
          ))}
        </div>
      </div>
      <Footer/>
    </main>
  )
}

export default Home;
