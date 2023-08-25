'use client'

import * as React from 'react'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { mdxComponents } from "@/components/mdxcomponents"

interface params {
  proposal: any
}

const GetMDXComponent = ({ proposal }: params) => {
  const MDXContent = getMDXComponent(proposal)

  return(
    <>
      <MDXContent components={mdxComponents} />
    </>
  )

}

export default GetMDXComponent