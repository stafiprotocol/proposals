'use client'

import { notFound } from "next/navigation"
import { allProposals } from "contentlayer/generated"
import { getMDXComponent } from 'next-contentlayer/hooks'
import { mdxComponents } from "@/components/mdxcomponents"
import Header from "@/components/header"
import Footer from "@/components/footer"

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
        <div className="text-5xl font-title">
          {proposal.title}
        </div>
        <div className='text-black font-inter text-xl mt-20'>
          <MDXContent components={mdxComponents} />
        </div>
      </div>
      <Footer/>
    </div>
  )
}