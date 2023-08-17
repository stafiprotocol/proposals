import * as React from 'react';
import Link from 'next/link';
import type { MDXComponents } from 'mdx/types'


// define mdx components style
export const mdxComponents: MDXComponents = {
  // Override the default <a> element to use the next/link component.
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  h1: ({...props}) =>(
    <h1 className='text-3xl text-[#37352F] mt-6 mb-4 font-semibold' {...props}/>
  ),
  h2:({...props}) =>(
    <h2 className='text-2xl text-[#37352F] mt-6 mb-1 font-semibold' {...props}/>
  ),
  h3:({...props}) =>(
    <h3 className='text-xl text-black mt-10 mb-2 font-semibold' {...props}/>
  ),
  p:({...props}) =>(
    <p className='text-base text-[#37352F] leading-normal mt-2 mb-2' {...props}/>
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
    <ul className='list-disc list-inside pl-2' {...props}/>
  ),
  ol:({...props}) => (
    <ol className='list-decimal list-inside' {...props}/>
  ),
  li:({...props}) => (
    <li className='text-base text-[#37352F] mt-2 mb-2' {...props} />
  ),
  // Add a custom component.
}