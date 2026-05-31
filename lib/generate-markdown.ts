export function generateMarkdown(profile: {
  fullName: string;
  subtitle: string;
  summary: string;
  funFact: string;

  portfolioUrl: string;
  blogUrl: string;
  resumeUrl: string;

  github: string;
  linkedin: string;
  twitter: string;
  instagram: string;

  skills: string[];
}) {
  return `# Hi 👋, I'm ${profile.fullName}

${profile.subtitle}

## 🚀 About Me

${profile.summary}

## ⚡ Fun Fact

${profile.funFact}

## 🔗 Links

- Portfolio: ${profile.portfolioUrl}
- Blog: ${profile.blogUrl}
- Resume: ${profile.resumeUrl}

## 🌐 Connect With Me

- GitHub: https://github.com/${profile.github}
- LinkedIn: https://linkedin.com/in/${profile.linkedin}
- Twitter: https://twitter.com/${profile.twitter}
- Instagram: https://instagram.com/${profile.instagram}

## 🛠 Skills

${profile.skills.map((s) => `- ${s}`).join("\n")}
`;
}