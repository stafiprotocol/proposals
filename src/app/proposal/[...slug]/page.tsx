import { notFound } from "next/navigation"
import { allProposals } from "contentlayer/generated"
import { Metadata } from "next"
import { MDXProvider } from "@/components/mdxcomponents"


interface ProposalProps {
  params: {
    slug: string[]
  }
}

async function getProposalFromParams(params: ProposalProps["params"]) {
  const slug = params?.slug?.join("/")
  const proposal = allProposals.find((proposal: { slugAsParams: string }) => proposal.slugAsParams === slug)

  if (!proposal) {
    null
  }

  return proposal
}

export async function generateMetadata({
  params,
}: ProposalProps): Promise<Metadata> {
  const proposal = await getProposalFromParams(params)

  if (!proposal) {
    return {}
  }

  return {
    title: proposal.title,
    description: proposal.description,
  }
}

export async function generateStaticParams(): Promise<ProposalProps["params"][]> {
  return allProposals.map((proposal: { slugAsParams: string }) => ({
    slug: proposal.slugAsParams.split("/"),
  }))
}

export default async function ProposalPage({ params }: ProposalProps) {
  const proposal = await getProposalFromParams(params)

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