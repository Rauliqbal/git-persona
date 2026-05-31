import Navbar from "@/components/layout/navbar";
import PreviewPanel from "@/components/preview/preview-panel";
import ProfileForm from "@/components/profile-form";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProfileForm />
          <PreviewPanel />
        </div>
      </main>
    </>
  );
}
