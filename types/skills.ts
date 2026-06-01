export interface SkillCategory {
  title: string;
  skills: string[];
}

export type CategorizedSkills = Record<
  string,
  SkillCategory
>;

export type SkillState = Record<
  string,
  boolean
>;