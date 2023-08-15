import { notFound } from "next/navigation"
import { allProposals } from "contentlayer/generated"
import { MDXProvider } from "@/components/mdxcomponents"
import { getMDXComponent } from 'next-contentlayer/hooks'
import Link from "next/link"
import type { MDXComponents } from 'mdx/types'



export const generateStaticParams = async () => allProposals.map((proposal) => (
  { slug: proposal._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const proposal = allProposals.find((post) => post._raw.flattenedPath === params.slug)
  return { 
    title: proposal?.title,
    description: proposal?.description,
  }
}


// define mdx components style
const mdxComponents: MDXComponents = {
  // Override the default <a> element to use the next/link component.
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  h1: ({...props}) =>(
    <h1 className='text-4xl text-black mt-12 mb-6 md:leading-loose font-medium' {...props}/>
  ),
  h2:({...props}) =>(
    <h2 className='text-3xl text-black mt-12 mb-6 md:leading-loose font-medium' {...props}/>
  ),
  h3:({...props}) =>(
    <h3 className='text-2xl text-black mt-12 mb-6 md:leading-loose font-medium' {...props}/>
  ),
  p:({...props}) =>(
    <p className='text-lg text-[#767b81] leading-loose mb-8' {...props}/>
  ),
  img:({ ...props }) =>(
    <img { ...props } className='w-full'/>
  ),
  blockquote:({ ...props }) => (
    <blockquote {...props} className="w-full text-center bg-[#eaecf0] text-xl"/>
  ),
  table:({...props}) =>(
    <table className="table-auto" {...props}/>
  ),
  ul:({...props}) => (
    <ul className='list-disc list-inside' {...props}/>
  ),
  ol:({...props}) => (
    <ol className='list-decimal list-inside' {...props}/>
  ),
  li:({...props}) => (
    <li className='text-lg text-[#767b81] leading-relaxed mb-3' {...props} />
  ),
  // Add a custom component.
}

export default async function ProposalPage({ params }: { params: { slug: string } }) {
  
  const proposal = allProposals.find((proposal) => proposal._raw.flattenedPath === params.slug)

  if (!proposal) {
    notFound()
  }

  const MDXContent = getMDXComponent(proposal.body.code)

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
        <div className='text-black md:max-w-5xl mx-auto py-8 px-6 md:px-0'>
          <MDXContent components={mdxComponents} />
        </div>
      </div>
    </>
  )
}