import { defineDocumentType, makeSource } from "contentlayer/source-files"
import highlight from "rehype-highlight"
import { remarkMermaid } from "@theguild/remark-mermaid"
import remarkGfm from "remark-gfm"

/** @type {import('contentlayer/source-files').ComputedFields} */

const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
}

export const Proposal = defineDocumentType(() => ({
  name: "Proposal",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    date:{
      type: "string",
      required: true,
    },
    status:{
      type: "number",
      required: true,
    },
    discusslink:{
      type: "string",
      required: false,
    },
    snapshotlink:{
      type: "string",
      required: false,
    },
    author:{
      type: "string",
      required: false,
    }
    
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/proposal/${doc._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'proposal',
  documentTypes: [Proposal],
  mdx: {
    remarkPlugins: [remarkGfm,remarkMermaid],
    rehypePlugins: [highlight],
  },
})