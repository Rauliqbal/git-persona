import { create } from "zustand";

export interface ProfileState {
  fullName: string;
  subtitle: string;
  summary: string;
  github: string;
  linkedin: string;
  skills: string[];

  setFullName: (value: string) => void;
  setSubtitle: (value: string) => void;
  setSummary: (value: string) => void;
  setGithub: (value: string) => void;
  setLinkedin: (value: string) => void;

  addSkill: (skill: string) => void;
  removeSkill: (skill: string) => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
  fullName: "",
  subtitle: "",
  summary: "",
  github: "",
  linkedin: "",
  skills: [],

  setFullName: (value) =>
    set({ fullName: value }),

  setSubtitle: (value) =>
    set({ subtitle: value }),

  setSummary: (value) =>
    set({ summary: value }),

  setGithub: (value) =>
    set({ github: value }),

  setLinkedin: (value) =>
    set({ linkedin: value }),

  addSkill: (skill) =>
    set((state) => ({
      skills: [...state.skills, skill],
    })),

  removeSkill: (skill) =>
    set((state) => ({
      skills: state.skills.filter(
        (s) => s !== skill
      ),
    })),
}));