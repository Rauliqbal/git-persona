import ProfileForm from "@/components/form/profile-form";
import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="container py-8">
          <ProfileForm />
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        </div> */}
      </main>
    </>
  );
}
