import { defineConfig, defineCollection, s } from "velite";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";

const posts = defineCollection({
  name: "Post",
  pattern: "posts/**/*.{md,mdx}",
  schema: s
    .object({
      published: s.boolean().default(false),
      title: s.string().max(99),
      description: s.string().max(200).optional(),
      excerpt: s.string().max(300),
      date: s.isodate(),
      updated: s.isodate().optional(),
      author: s.string().default("Your Name"),
      readTime: s.string(),
      category: s.string(),
      image: s.string().optional(),
      imageAlt: s.string().optional(),
      tags: s.array(s.string()).default([]),
      featured: s.boolean().default(false),
      draft: s.boolean().default(false),
      body: s.mdx(),
    })
    .transform((data, { meta }) => ({
      ...data,
      slug: meta.basename.replace(/\.(md|mdx)$/, ""),
      path: `/blog/${meta.basename.replace(/\.(md|mdx)$/, "")}`,
      permalink: `https://ruangkarya.space/blog/${meta.basename.replace(
        /\.(md|mdx)$/,
        ""
      )}`,
      readTimeMinutes: parseInt(data.readTime.replace(/\D/g, "")) || 5,
    })),
});

const projects = defineCollection({
  name: "Project",
  pattern: "projects/**/*.mdx",
  schema: s
    .object({
      published: s.boolean().default(false),
      title: s.string(),
      description: s.string(),
      date: s.isodate(),
      url: s.string().optional(),
      repository: s.string().optional(),
      body: s.mdx(),
    })
    .transform((data, { meta }) => ({
      ...data,
      slug: meta.basename.replace(".mdx", ""),
      path: `/projects/${meta.basename.replace(".mdx", "")}`,
    })),
});

export default defineConfig({
  root: "./content",
  output: {
    data: ".velite",
    clean: true,
  },
  collections: { posts, projects },
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: {
            dark: "material-theme-palenight",
            light: "material-theme-lighter",
          },
          keepBackground: false,
          defaultLang: "plaintext",
          tokensMap: {
            // Enhanced token mapping for Material theme syntax support
            fn: "entity.name.function",
            objKey: "meta.object-literal.key",
            property: "variable.other.property",
            variableName: "variable.other.readwrite",
            stringContent: "string.quoted.double",
          },
          transformers: [
            {
              name: "meta-highlight",
              code(node) {
                node.properties["data-theme"] = "material-theme";
              },
            },
          ],
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});
