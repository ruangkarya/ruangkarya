import * as React from "react";

// Utility function for conditional className joining (clsx equivalent)
function clsx(...args: any[]) {
  return args.filter(Boolean).join(" ");
}

// Comprehensive component mappings for MDX rendering
export const mdxComponents = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={clsx(
        "mt-12 mb-8 scroll-m-20 text-4xl font-bold tracking-tight leading-tight first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={clsx(
        "mt-16 mb-6 scroll-m-20 border-b border-b-slate-200 dark:border-b-slate-700 pb-3 text-3xl font-semibold tracking-tight leading-tight first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={clsx(
        "mt-12 mb-4 scroll-m-20 text-2xl font-semibold tracking-tight leading-tight",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={clsx(
        "mt-10 mb-3 scroll-m-20 text-xl font-semibold tracking-tight leading-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={clsx(
        "mt-8 mb-3 scroll-m-20 text-lg font-semibold tracking-tight leading-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={clsx(
        "mt-8 mb-2 scroll-m-20 text-base font-semibold tracking-tight leading-tight",
        className
      )}
      {...props}
    />
  ),
  a: ({
    className,
    href,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = href?.startsWith("http");
    return (
      <a
        className={clsx(
          "font-medium text-teal-500 hover:text-teal-600 dark:hover:text-teal-400 underline underline-offset-4 transition-colors",
          className
        )}
        href={href}
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
      />
    );
  },
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={clsx(
        "leading-relaxed text-base mb-6 [&:not(:first-child)]:mt-6",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={clsx(
        "my-8 ml-6 list-disc space-y-3 leading-relaxed",
        className
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={clsx(
        "my-8 ml-6 list-decimal space-y-3 leading-relaxed",
        className
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={clsx("leading-relaxed", className)} {...props} />
  ),
  blockquote: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={clsx(
        "my-8 border-l-4 border-teal-500 pl-8 py-4 bg-slate-50 dark:bg-slate-800/50 italic text-slate-700 dark:text-slate-300 leading-relaxed [&>*]:text-slate-700 dark:[&>*]:text-slate-300 rounded-r-lg",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img
      className={clsx(
        "rounded-2xl shadow-2xl mx-auto my-12 max-w-full h-auto border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-3xl",
        className
      )}
      alt={alt}
      loading="lazy"
      {...props}
    />
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr
      className="my-12 border-slate-200 dark:border-slate-700 border-2 rounded-full"
      {...props}
    />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="w-full my-6 overflow-y-auto">
      <table className={clsx("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={clsx(
        "m-0 border-t border-slate-300 dark:border-slate-600 p-0 even:bg-slate-100 dark:even:bg-slate-800",
        className
      )}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={clsx(
        "border border-slate-200 dark:border-slate-600 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={clsx(
        "border border-slate-200 dark:border-slate-600 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={clsx(
        "my-8 overflow-x-auto rounded-xl bg-slate-900 dark:bg-slate-800 py-6 px-6 border border-slate-200 dark:border-slate-700 shadow-lg",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={clsx(
        "relative rounded-md border bg-slate-100 dark:bg-slate-800 py-[0.3rem] px-[0.5rem] font-mono text-sm text-teal-600 dark:text-teal-400 shadow-sm",
        className
      )}
      {...props}
    />
  ),
};
