"use client";

import { useMarkdown } from "@/lib/markdown";
import Editor from "@monaco-editor/react";

export default function MarkdownEditor() {
  const markdown = useMarkdown();
  return (
    <Editor
      height="600px"
      defaultLanguage="markdown"
      value={markdown}
      theme="vs-dark"
    />
  );
}