export function generateMarkdown(profile: {
  selectedSkills: string[];
  fullName: string;
  subtitle: string;
  summary: string;
  funFact: string;
  currLearning: string;

  portfolioUrl: string;
  blogUrl: string;
  resumeUrl: string;

  github: string;
  linkedin: string;
  twitter: string;
  instagram: string;

  skills: string[];
}) {
  const sections: string[] = [];

  // Header
  sections.push(`# Hi 👋, I'm ${profile.fullName || "Developer"}`);

  if (profile.subtitle) {
    sections.push(profile.subtitle);
  }

  // About
  if (profile.summary) {
    sections.push(`
## 🚀 About Me

${profile.summary}
`);
  }

  // Currently Learning
  if(profile.currLearning) {
    sections.push(`
## 📚 Currently Learning

${profile.currLearning}
`);
  }

  // Fun Fact
  if (profile.funFact) {
    sections.push(`
## ⚡ Fun Fact

${profile.funFact}
`);
  }

  // Links
  const links: string[] = [];

  if (profile.portfolioUrl) {
    links.push(`- Portfolio: ${profile.portfolioUrl}`);
  }

  if (profile.blogUrl) {
    links.push(`- Blog: ${profile.blogUrl}`);
  }

  if (profile.resumeUrl) {
    links.push(`- Resume: ${profile.resumeUrl}`);
  }

  if (links.length > 0) {
    sections.push(`
## 🔗 Links

${links.join("\n")}
`);
  }

  // Social Media
  const socials: string[] = [];

  if (profile.github) {
    socials.push(`- GitHub: https://github.com/${profile.github}`);
  }

  if (profile.linkedin) {
    socials.push(`- LinkedIn: https://linkedin.com/in/${profile.linkedin}`);
  }

  if (profile.twitter) {
    socials.push(`- Twitter: https://twitter.com/${profile.twitter}`);
  }

  if (profile.instagram) {
    socials.push(`- Instagram: https://instagram.com/${profile.instagram}`);
  }

  if (socials.length > 0) {
    sections.push(`
## 🌐 Connect With Me

${socials.join("\n")}
`);
  }

  // Skills
  if (profile.selectedSkills.length > 0) {
    sections.push(`
## 🛠 Tech Stack

![My Skills](https://skillicons.dev/icons?i=${profile.selectedSkills.join(",")})
`);
}

  return sections.join("\n");
}
