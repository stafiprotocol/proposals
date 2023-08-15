import { notFound } from "next/navigation"
import { allProposals } from "contentlayer/generated"
import { MDXProvider } from "@/components/mdxcomponents"


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

  return (
    <>
      <div className='relative h-[500px] w-full mx-auto my-0'>
        <div className='md:max-w-5xl bg-white px-8 py-9 z-10 absolute bottom-0 md:left-1/4 md:right-1/4 rounded-tl-[16px] rounded-tr-[16px]'>
          <div className='text-black md:leading-sung text-4xl md:text-5xl text-center font-fontTheme mt-4 md:mt-9'>
            {proposal.title}
          </div>
        </div>
      </div>
             
     
      <div className='bg-[#f9f9fb] mt-10'>
        <div className='md:max-w-5xl mx-auto py-8 px-6 md:px-0'>
          <MDXProvider code={proposal.body.code} />
        </div>
      </div>
    </>
  )
}