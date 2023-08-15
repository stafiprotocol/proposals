import { notFound } from "next/navigation"
import { allProposals } from "contentlayer/generated"
import { getMDXComponent } from 'next-contentlayer/hooks'
import { mdxComponents } from "@/components/mdxcomponents"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const generateStaticParams = async () => allProposals.map((proposal) => (
  { slug: proposal._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const proposal = allProposals.find((post) => post._raw.flattenedPath === params.slug)
  return { 
    title: proposal?.title,
    description: proposal?.description,
  }
}


export default async function ProposalPage({ params }: { params: { slug: string } }) {
  
  const proposal = allProposals.find((proposal) => proposal._raw.flattenedPath === params.slug)

  if (!proposal) {
    notFound()
  }

  const MDXContent = getMDXComponent(proposal.body.code)

  return (
    <>
    
      <Header/>

      <div className="pt-48 max-w-5xl mx-auto">
        <div className="text-5xl font-title">
          {proposal.title}
        </div>
        <div className='text-black font-inter text-xl mt-20'>
          <MDXContent components={mdxComponents} />
        </div>
      </div>
       
      <Footer/>
    </>
  )
}