import ProfileForm from "@/components/form/profile-form";
import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container py-8">
          <ProfileForm />
      </main>
    </>
  );
}
