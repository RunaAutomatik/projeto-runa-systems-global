"use client";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import { CopyBlock } from "@/components/biblioteca/copy-block";

export function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="prose prose-invert max-w-none">
      <ReactMarkdown
        rehypePlugins={[rehypeHighlight]}
        components={{
          pre: ({ children }) => <CopyBlock>{children}</CopyBlock>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
