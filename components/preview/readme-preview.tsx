"use client";

import { useProfileStore } from "@/store/profile";

export default function ReadmePreview() {
  const {
    fullName,
    subtitle,
    summary,
    skills,
  } = useProfileStore();

  return (
    <div className="space-y-4">

      <h1 className="text-4xl font-bold">
        Hi 👋, I&apos;m {fullName || "John Doe"}
      </h1>

      <p className="text-xl text-muted-foreground">
        {subtitle || "Full Stack Developer"}
      </p>

      <p>
        {summary ||
          "Write something about yourself"}
      </p>

      <div className="flex gap-2 flex-wrap">
        {skills.map((skill) => (
          <span
            key={skill}
            className="border px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}