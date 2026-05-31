"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useProfileStore } from "@/store/profile";

export default function BasicInfo() {
  const {
    fullName,
    subtitle,
    summary,
    setFullName,
    setSubtitle,
    setSummary,
  } = useProfileStore();

  return (
    <div className="space-y-4">
      <Input
        placeholder="John Doe"
        value={fullName}
        onChange={(e) =>
          setFullName(e.target.value)
        }
      />

      <Input
        placeholder="Full Stack Developer"
        value={subtitle}
        onChange={(e) =>
          setSubtitle(e.target.value)
        }
      />

      <Textarea
        placeholder="Tell us about yourself"
        value={summary}
        onChange={(e) =>
          setSummary(e.target.value)
        }
      />
    </div>
  );
}