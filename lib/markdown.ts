import { useProfileStore } from "@/store/profile";

export const useMarkdown = () => {
  const profile = useProfileStore();

  return `
# Hi 👋, I'm ${profile.fullName}

${profile.title}

## About Me

${profile.summary}

## Skills

${profile.selectedSkills.map((s) => `- ${s}`).join("\n")}
`;
};
