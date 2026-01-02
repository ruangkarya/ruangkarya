import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { mdxComponents } from "./MdxComponents";

// Main MDX renderer component using react-markdown
interface MdxRendererProps {
  code: string;
  raw: string;
}

export function MdxRenderer({ code, raw }: MdxRendererProps) {
  return (
    <div className="mdx">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
        ]}
        components={mdxComponents}
      >
        {raw}
      </ReactMarkdown>
    </div>
  );
}
