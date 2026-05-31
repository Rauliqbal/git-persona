import { Card, CardContent, CardHeader } from "../ui/card";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import ReadmePreview from "./readme-preview";

export default function PreviewPanel() {
  return (
    <div className="p-8">
      <Card className="sticky top-8">
        <CardHeader>
          <Tabs defaultValue="preview">

            <TabsList>
              <TabsTrigger value="preview">
                Preview
              </TabsTrigger>

              <TabsTrigger value="markdown">
                Raw Markdown
              </TabsTrigger>
            </TabsList>

          </Tabs>
        </CardHeader>

        <CardContent>
          <ReadmePreview/>
        </CardContent>
      </Card>
    </div>
  )
}
