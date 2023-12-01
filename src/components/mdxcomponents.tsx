'use client'

import * as React from 'react';
import Link from 'next/link';
import type { MDXComponents } from 'mdx/types'


// define mdx components style
export const mdxComponents: MDXComponents = {
  // Override the default <a> element to use the next/link component.
  a: ({ href, children }) => <Link href={href as string} className='text-[#0061FE]'>{children}</Link>,
  h1: ({...props}) =>(
    <h1 className='text-3xl text-[#1E1919] mt-6 mb-6 font-semibold' {...props}/>
  ),
  h2:({...props}) =>(
    <h2 className='text-2xl text-[#1E1919] mt-6 mb-6 font-semibold' {...props}/>
  ),
  h3:({...props}) =>(
    <h3 className='text-xl text-black mt-10 mb-4 font-semibold' {...props}/>
  ),
  p:({...props}) =>(
    <p className='text-base text-[#1E1919] mt-2 mb-4 leading-relaxed tracking-wide' {...props}/>
  ),
  img:({ ...props }) =>(
    <img { ...props } className='w-full mb-6'/>
  ),
  blockquote:({ ...props }) => (
    <blockquote {...props} className="w-full text-center bg-[#eaecf0] text-xl"/>
  ),
  table:({...props}) =>(
    <table className="border-collapse w-full text-sm my-6 table-fixed" {...props}/>
  ),
  tbody:({...props}) =>(
    <tbody className='bg-white' {...props}/>
  ),
  th:({...props})=>(
    <th className='border-b font-medium p-3 pl-3 pt-0 pb-3 text-slate-400 text-left ' {...props}/>
  ),
  td:({...props})=>(
    <td className='border-b border-slate-100 p-3 pl-3 text-slate-500 truncate hover:text-clip' {...props}/>
  ),
  ul:({...props}) => (
    <ul className='list-disc list-inside pl-2 mt-2 mb-4' {...props}/>
  ),
  ol:({...props}) => (
    <ol className='list-decimal list-inside' {...props}/>
  ),
  li:({...props}) => (
    <li className='text-base text-[#37352F] mt-2 mb-2' {...props} />
  ),
  // Add a custom component.
}