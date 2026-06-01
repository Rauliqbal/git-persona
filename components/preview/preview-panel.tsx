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

export default function PreviewPanel() {
  const profile = useProfileStore();

  const markdown = generateMarkdown(profile);

  return (
    <Card>
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
              <ReactMarkdown>
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
    </Card>
  );
}