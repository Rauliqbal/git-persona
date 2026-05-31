"use client";

import { Input } from "@/components/ui/input";
import { useProfileStore } from "@/store/profile";

export default function SocialLinks() {
  const {
    github,
    linkedin,
    setGithub,
    setLinkedin,
  } = useProfileStore();

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Input
        placeholder="github username"
        value={github}
        onChange={(e) =>
          setGithub(e.target.value)
        }
      />

      <Input
        placeholder="linkedin username"
        value={linkedin}
        onChange={(e) =>
          setLinkedin(e.target.value)
        }
      />
    </div>
  );
}