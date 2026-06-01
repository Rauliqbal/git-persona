"use client";

import Image from "next/image";
import { useProfileStore } from "@/store/profile";
import { Badge } from "@/components/ui/badge";
import SkillsStep from "./skill-step";
import { getSkillIconUrl } from "@/lib/generate-markdown";

export default function SkillsSection() {
  const selectedSkills = useProfileStore((state) => state.selectedSkills ?? []);
  const toggleSkill = useProfileStore((state) => state.toggleSkill);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 min-h-12 p-3 rounded-md border bg-muted/20 items-center">
        {selectedSkills.length === 0 && (
          <p className="text-sm text-muted-foreground px-1">No skills selected yet.</p>
        )}
        {selectedSkills.map((item) => {
          const iconUrl = getSkillIconUrl(item)

          return (
            <Badge
              key={item}
              variant="secondary"
              className="pl-1.5 pr-2 py-1 flex items-center gap-2 cursor-pointer hover:bg-destructive hover:text-destructive-foreground transition-colors select-none"
              onClick={() => toggleSkill(item)}
            >
              <div className="relative w-4 h-4 bg-background rounded-sm p-0.5 flex items-center justify-center">
                <Image
                  src={iconUrl}
                  alt={item}
                  width={16}
                  height={16}
                  className="object-contain"
                  unoptimized
                />
              </div>
              <span className="capitalize text-xs font-medium">{item}</span>
              <span className="text-[10px] opacity-60">✕</span>
            </Badge>
          )
        })}
      </div>
      <SkillsStep />
    </div>
  );
}