import * as React from 'react';
import Link from 'next/link';
import type { MDXComponents } from 'mdx/types'


// define mdx components style
export const mdxComponents: MDXComponents = {
  // Override the default <a> element to use the next/link component.
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  h1: ({...props}) =>(
    <h1 className='text-3xl text-black mt-10 mb-6 md:leading-loose font-medium border-b-[1px]' {...props}/>
  ),
  h2:({...props}) =>(
    <h2 className='text-2xl text-black mt-10 mb-4 md:leading-loose font-medium' {...props}/>
  ),
  h3:({...props}) =>(
    <h3 className='text-xl text-black mt-10 mb-2 md:leading-loose font-medium' {...props}/>
  ),
  p:({...props}) =>(
    <p className='text-base text-black/70 leading-relaxed tracking-wide mb-2' {...props}/>
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
    <li className='text-base text-black/70 leading-relaxed tracking-wide mb-2' {...props} />
  ),
  // Add a custom component.
}