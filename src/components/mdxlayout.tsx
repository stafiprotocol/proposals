'use client';

import * as React from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { MDXProvider, components } from './mdxcomponents';
import { getAllFrontmatter, getMdxBySlug } from '../lib/mdx';

import type { Frontmatter } from '../types/frontmatter';

type Doc = {
  frontmatter: Frontmatter;
  code: string;
};

export default async function Article(params:any){
  
  const { frontmatter, code } = await getArticle(params);

  const Component = getMDXComponent(code);

  return(
    <>
      <div className='relative h-[500px] w-full mx-auto my-0'>
        <img src={frontmatter.metaImage} className="h-full w-full brightness-50 object-cover absolute z-0"/>
        <div className='md:max-w-5xl bg-white px-8 py-9 z-10 absolute bottom-0 md:left-1/4 md:right-1/4 rounded-tl-[16px] rounded-tr-[16px]'>
          <div className='rounded-[6px] border-[1px] border-black/50 px-6 py-2 font-bold text-center text-base w-fit mx-auto'>
            {frontmatter.tags}
          </div>
          <div className='text-black md:leading-sung text-4xl md:text-5xl text-center font-fontTheme mt-4 md:mt-9'>
            {frontmatter.metaTitle}
          </div>
        </div>
      </div>
             
      <div className='mt-4 text-center text-xl font-fontTheme text-black'>
        {frontmatter.partner}
      </div>
      <div className='md:max-w-3xl mx-auto mt-6 px-6 md:px-16'>
        <div className='text-lg text-black font-fontBangla text-center leading-relaxed tracking-wide'>
          {frontmatter.metaDescription}
        </div>
      </div>
      <div className='bg-[#f9f9fb] mt-10'>
        <div className='md:max-w-5xl mx-auto py-8 px-6 md:px-0'>
          <MDXProvider frontmatter={frontmatter}>
            <Component components={components as any} />
          </MDXProvider>
        </div>
      </div>
    </>
  )

}

export async function generateStaticParams() {
  const frontmatters = getAllFrontmatter('article');
  return frontmatters.map((frontmatter) => ({
      slug: frontmatter.slug.replace('article/', '')
    }))
}

export async function getArticle(params:any) {
   const {frontmatter,code} = await getMdxBySlug('article/', params.params.slug);
   return {frontmatter,code};
 }