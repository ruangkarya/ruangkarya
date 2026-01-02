import React from "react";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useTheme } from "../ThemeToggle";

interface VeliteMdxRendererProps {
  body: string; // Velite generates a compiled MDX function as a string
  className?: string;
}

export function VeliteMdxRenderer({ body, className }: VeliteMdxRendererProps) {
  const { theme } = useTheme();

  const MdxComponent = React.useMemo(() => {
    try {
      // Velite generates a module that expects JSX runtime as arguments[0]
      // The body contains statements, not expressions, so we need to execute it as a module

      const jsxRuntime = {
        Fragment,
        jsx,
        jsxs,
      };

      // Create a function that executes the module code with the JSX runtime
      // The body is a complete module that destructures from arguments[0]
      const moduleFactory = new Function(body);

      // Call the factory function with our JSX runtime as arguments[0]
      const mdxModule = moduleFactory.call(null, jsxRuntime);

      // Extract the default export (the MDX component)
      return mdxModule.default || mdxModule;
    } catch (error) {
      console.error("Failed to render MDX:", error);
      console.error("Body content:", body.substring(0, 200) + "...");
      return () =>
        React.createElement(
          "div",
          {
            className:
              "p-4 border border-red-300 bg-red-50 text-red-700 rounded",
          },
          "Failed to render MDX content. Check console for details."
        );
    }
  }, [body]);

  // Determine theme classes based on current theme
  const themeClass = theme === "dark" ? "theme-dark" : "theme-light";
  const combinedClassName = `mdx-content ${themeClass} ${
    className || ""
  }`.trim();

  return React.createElement(
    "div",
    {
      className: combinedClassName,
      "data-theme": theme,
    },
    React.createElement(MdxComponent)
  );
}
