'use client'

import { notFound } from "next/navigation"
import { allProposals } from "contentlayer/generated"
import { getMDXComponent } from 'next-contentlayer/hooks'
import { mdxComponents } from "@/components/mdxcomponents"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Status from "@/components/status"
import { IpfsIcon, SnapshotIcon, LinkIcon } from "@/components/icons"

export const generateStaticParams = async () => allProposals.map((proposal) => (
  { slug: proposal._raw.flattenedPath }))


export default async function ProposalPage({ params }: { params: { slug: string } }) {
  
  const proposal = allProposals.find((proposal) => proposal._raw.flattenedPath === params.slug)


  if (!proposal) {
    notFound()
  }

  const MDXContent = getMDXComponent(proposal.body.code)

  return (
    <div>
      <Header/>
      <div className="mt-32 max-w-3xl mx-auto">
        <div className="mt-10 w-fit">
          <Status status={proposal.status}/>
        </div>
        <div className="text-5xl font-title mt-10">
          {proposal.title}
        </div>
        <div className="flex items-center space-x-4 mt-10">
          <Link href=''>
            <div className="border-[1px] border-black/60 rounded-md px-2 py-1 text-black/60 flex items-center space-x-1">
              <div className="text-base">
                Forum discussion
              </div>
              <LinkIcon/>
            </div>
          </Link>
          <Link href=''>
            <div className="border-[1px] border-black/60 rounded-md px-2 py-1 flex items-center space-x-1">
              <IpfsIcon/>
              <div className="text-base text-black/60">
                IPFS
              </div>
              <LinkIcon/>
            </div>
          </Link>
           <Link href=''>
            <div className="border-[1px] border-black/60 rounded-md px-2 py-1 flex items-center space-x-1">
              <SnapshotIcon/>
              <div className="text-base text-black/60">
                Snapshot
              </div>
              <LinkIcon/>
            </div>
          </Link>
        </div>
       
     
        <div className='text-black font-inter text-xl mt-16'>
          <MDXContent components={mdxComponents} />
        </div>
      </div>
      <Footer/>
    </div>
  )
}