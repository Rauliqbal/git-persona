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
    <div className="pb-0">
      <Tabs className="flex-col" defaultValue="preview">
        <div className="flex justify-between gap-4">
          <TabsList className="mb-4">
            <TabsTrigger value="preview">
              Preview
            </TabsTrigger>
            <TabsTrigger value="markdown">
              Markdown
            </TabsTrigger>
          </TabsList>

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

        <Card>
          <TabsContent value="preview">
            <article className="markdown-body p-4">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
              >
                {markdown}
              </ReactMarkdown>
            </article>
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
        </Card>
      </Tabs>
    </div>
  );
}