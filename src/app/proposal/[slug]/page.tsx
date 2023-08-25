import { notFound } from "next/navigation"
import { allProposals } from "contentlayer/generated"
import Header from "@/components/header"
import Link from "next/link"
import Status from "@/components/status"
import { IpfsIcon, SnapshotIcon, LinkIcon } from "@/components/icons"
import jsonDataList from '../../../../cid/ipfs-sips/all-hash.json';
import GetMDXComponent from "@/components/getmdxcomponent"


export const generateStaticParams = async () => allProposals.map((proposal) => (
  { slug: proposal._raw.flattenedPath }))


export const generateMetadata = async({ params }: { params: { slug: string } }) => {
  
  const proposal = allProposals.find((proposal) => proposal._raw.flattenedPath === params.slug)

    return {
      title: proposal?.title,
      description: proposal?.description,
      twitter: {
        card: 'summary_large_image',
        title: proposal?.title,
        description: proposal?.description,
        images: ['https://proposals.stafi.io/og.png'],
      },
      openGraph: {
        title: proposal?.title,
        description: proposal?.description,
        url: 'https://proposals.stafi.io',
        siteName: 'StaFi Improvement Proposal',
        type: 'article',
        images: [
          {
            url: 'https://proposals.stafi.io/og.png',
            width: 800,
            height: 600,
            alt: 'StaFi Improvement Proposal',
          
      }]}
    }
  }

const ProposalPage = async({ params }: { params: { slug: string } }) => {
  
  const proposal = allProposals.find((proposal) => proposal._raw.flattenedPath === params.slug)
  
  const matchedItem = jsonDataList.find(item => `/proposal/${item.name}` === proposal?.url);
  const hashlink = matchedItem ? matchedItem.hash : '';


  if (!proposal) {
    notFound()
  }

  return (
    <div>
      <Header/>
      <div className="mt-32 max-w-3xl mx-auto mb-32">
        <div className="mt-10 w-fit">
          <Status status={proposal.status}/>
        </div>
        <div className="text-5xl font-title mt-10">
          {proposal.title}
        </div>
        <div className="flex items-center space-x-4 mt-6">
          {proposal.discusslink &&<Link href={proposal.discusslink}>
            <div className="border-[1px] border-black/60 rounded-md px-2 py-1 text-black/60 flex items-center space-x-1 hover:border-black group">
              <div className="text-base text-black/60 group-hover:text-black">
                Forum discussion
              </div>
              <div className="w-4 h-4">
                <LinkIcon/>
              </div>
            </div>
          </Link>}
          {hashlink &&<Link href={`https://ipfs.io/ipfs/${hashlink}`} target='_blank'>
            <div className="border-[1px] border-black/60 rounded-md px-2 py-1 flex items-center space-x-1 hover:border-black group">
              <div className="w-4 h-4">
                <IpfsIcon/>
              </div>
              <div className="text-base text-black/60 group-hover:text-black">
                IPFS
              </div>
              <div className="w-4 h-4">
                <LinkIcon/>
              </div>
            </div>
          </Link>}
          {proposal.snapshotlink &&<Link href={proposal.snapshotlink}>
            <div className="border-[1px] border-black/60 rounded-md px-2 py-1 flex items-center space-x-1 hover:border-black group">
              <div className="w-3 h-4">
                <SnapshotIcon/>
              </div>
              <div className="text-base text-black/60 group-hover:text-black">
                Snapshot
              </div>
              <div className="w-4 h-4">
                <LinkIcon/>
              </div>
            </div>
          </Link>}
          <div className="grow"></div>
          <div className="text-base text-black/60">
            {proposal.date}
          </div>
        </div>
     
        <div className='text-black font-inter text-xl mt-16'>
          <GetMDXComponent proposal={proposal.body.code}/>
        </div>
      </div>
    </div>
  )
}

export default ProposalPage;