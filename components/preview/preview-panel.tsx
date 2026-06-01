"use client";

import ReactMarkdown from "react-markdown";
import Editor from "@monaco-editor/react";

import { useProfileStore } from "@/store/profile";
import { generateMarkdown } from "@/lib/generate-markdown";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import remarkGfm from "remark-gfm";
import { Check, Copy, FileCode } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import rehypeRaw from "rehype-raw";

export default function PreviewPanel() {
  const profile = useProfileStore();
  const [copied, setCopied] = useState(false);

  const markdown = generateMarkdown(profile);


  const handleCopyMarkdown = async () => {
    try {
      await navigator.clipboard.writeText(markdown);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className="pb-0">
      <CardContent className="pt-6">
        <Tabs className="flex-col" defaultValue="preview">
          <TabsList className="mb-4">
            <TabsTrigger value="preview">
              Preview
            </TabsTrigger>
            <TabsTrigger value="markdown">
              Markdown
            </TabsTrigger>
          </TabsList>

          <TabsContent value="preview">
            <div className="prose max-w-none dark:prose-invert">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
              >
                {markdown}
              </ReactMarkdown>
            </div>
          </TabsContent>

          <TabsContent value="markdown">
            <Editor
              height="600px"
              defaultLanguage="markdown"
              value={markdown}
              options={{
                minimap: {
                  enabled: false,
                },
                fontSize: 14,
                readOnly: true,
              }}
            />
          </TabsContent>



        </Tabs>
      </CardContent>

      <div className="p-4 bg-slate-900 flex items-center justify-between">
        <div className="flex items-center gap-3 text-slate-400">
          <FileCode className="text-xl" />
          <span className="text-sm font-medium">README.md ready to copy</span>
        </div>
        <Button
          variant="secondary"
          onClick={handleCopyMarkdown}
        >
          {copied ? (
            <>
              <Check className="size-4" />
              Copied
            </>
          ) : (
            <>
              <Copy className="size-4" />
              Copy Code
            </>
          )}
        </Button>
      </div>
    </Card>
  );
}