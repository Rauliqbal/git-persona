import { useProfileStore } from "@/store/profile";

export const useMarkdown = () => {
  const profile = useProfileStore();

  return `
# Hi 👋, I'm ${profile.fullName}

${profile.subtitle}

## About Me

${profile.summary}

## Skills

${profile.skills.map((s) => `- ${s}`).join("\n")}
`;
};
