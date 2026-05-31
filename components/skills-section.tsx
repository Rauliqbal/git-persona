"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useProfileStore } from "@/store/profile";

export default function SkillsSection() {
  const [skill, setSkill] = useState("");

  const {
    skills,
    addSkill,
    removeSkill,
  } = useProfileStore();

  const handleAdd = () => {
    if (!skill.trim()) return;

    addSkill(skill);
    setSkill("");
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          value={skill}
          placeholder="Next.js"
          onChange={(e) =>
            setSkill(e.target.value)
          }
        />

        <button
          onClick={handleAdd}
          className="px-4 py-2 border rounded"
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((item) => (
          <Badge
            key={item}
            className="cursor-pointer"
            onClick={() =>
              removeSkill(item)
            }
          >
            {item} ✕
          </Badge>
        ))}
      </div>
    </div>
  );
}