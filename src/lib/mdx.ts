import fs from 'fs';
import path from 'path';
import * as fg from 'fast-glob';
import matter from 'gray-matter';
import remarkSlug from 'remark-slug';
import { bundleMDX } from 'mdx-bundler';

import type { Frontmatter } from '../types/frontmatter';

const ROOT_PATH = process.cwd();
export const DATA_PATH = path.join(ROOT_PATH, 'data');

export const getAllFrontmatter = (fromPath:any) => {
  const PATH = path.join(DATA_PATH, fromPath);
  const paths = fg.sync([`${PATH}/**/*.mdx`],{ dot: true });
  
  return paths
    .map((filePath:any) => {
      const source = fs.readFileSync(path.join(filePath), 'utf8');
      const { data } = matter(source);

      return {
        ...(data as Frontmatter),
        slug: filePath.replace(`${DATA_PATH}/`, '').replace('.mdx', ''),
      } as Frontmatter;
    });
};

export const getMdxBySlug = async (basePath:any, slug:any) => {
  const source = fs.readFileSync(path.join(DATA_PATH, basePath, `${slug}.mdx`), 'utf8');
  const { frontmatter, code } = await bundleMDX({source:source, 
    mdxOptions(options:any) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkSlug];
      return options;
    },
  });

  return {
    frontmatter: {
      ...(frontmatter as Frontmatter),
      slug,
    } as Frontmatter,
    code,
  };
};