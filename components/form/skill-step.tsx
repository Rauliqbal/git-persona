"use client";

import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { useProfileStore } from "@/store/profile";
import { categorizedSkills } from "@/constant/skills";
import { SkillCategory } from "@/types/skills";

export default function SkillsStep() {
  const [mounted, setMounted] = useState(false);
  const selectedSkills = useProfileStore((state) => state.selectedSkills ?? []);
  const toggleSkill = useProfileStore((state) => state.toggleSkill);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="space-y-4 text-center text-sm">Loading skills...</div>;
  }

  return (
    <div className="space-y-8">
      {(Object.entries(categorizedSkills) as [string, SkillCategory][]).map(([category, data]) => (
        <div key={category}>
          <h3 className="mb-4 text-lg font-semibold">{data.title}</h3>

          <div className="grid gap-3 grid-cols-2 md:grid-cols-3">
            {data.skills.map((skill: string) => (
              <div
                key={skill}
                className="flex items-center gap-3 rounded-lg border p-3 hover:bg-muted/50 transition-colors"
              >
                <Checkbox
                  id={`skill-${skill}`}
                  checked={selectedSkills.includes(skill)}
                  onCheckedChange={() => toggleSkill(skill)}
                />
                <label 
                  htmlFor={`skill-${skill}`} 
                  className="flex items-center gap-3 w-full cursor-pointer select-none"
                >
                  <img
                    src={`https://skillicons.dev/icons?i=${skill}`}
                    alt={skill}
                    className="w-6 h-6 object-contain"
                    loading="lazy"
                  />
                  <span className="capitalize text-sm font-medium">{skill}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}