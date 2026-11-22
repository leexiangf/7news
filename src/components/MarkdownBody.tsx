import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";

const components: Components = {
  table: ({ children }) => (
    <div className="prose-table-wrap">
      <table>{children}</table>
    </div>
  ),
};

export function MarkdownBody({ content }: { content: string }) {
  return (
    <div className="prose-desk">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug, rehypeHighlight]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
