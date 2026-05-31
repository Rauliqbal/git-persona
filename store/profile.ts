import { create } from "zustand";

interface ProfileStore {
  step: number;

  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: number) => void;

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

  setFullName: (v: string) => void;
  setSubtitle: (v: string) => void;
  setSummary: (v: string) => void;
  setFunFact: (v: string) => void;

  setPortfolioUrl: (v: string) => void;
  setBlogUrl: (v: string) => void;
  setResumeUrl: (v: string) => void;

  setGithub: (v: string) => void;
  setLinkedin: (v: string) => void;
  setTwitter: (v: string) => void;
  setInstagram: (v: string) => void;

  addSkill: (skill: string) => void;
  removeSkill: (skill: string) => void;
}

export const useProfileStore = create<ProfileStore>((set) => ({
  step: 1,

  nextStep: () =>
    set((state) => ({
      step: Math.min(state.step + 1, 4),
    })),

  prevStep: () =>
    set((state) => ({
      step: Math.max(state.step - 1, 1),
    })),

  setStep: (step) => set({ step }),

  fullName: "",
  subtitle: "",
  summary: "",
  funFact: "",

  portfolioUrl: "",
  blogUrl: "",
  resumeUrl: "",

  github: "",
  linkedin: "",
  twitter: "",
  instagram: "",

  skills: [],

  setFullName: (v) => set({ fullName: v }),
  setSubtitle: (v) => set({ subtitle: v }),
  setSummary: (v) => set({ summary: v }),
  setFunFact: (v) => set({ funFact: v }),

  setPortfolioUrl: (v) => set({ portfolioUrl: v }),
  setBlogUrl: (v) => set({ blogUrl: v }),
  setResumeUrl: (v) => set({ resumeUrl: v }),

  setGithub: (v) => set({ github: v }),
  setLinkedin: (v) => set({ linkedin: v }),
  setTwitter: (v) => set({ twitter: v }),
  setInstagram: (v) => set({ instagram: v }),

  addSkill: (skill) =>
    set((state) => ({
      skills: [...state.skills, skill],
    })),

  removeSkill: (skill) =>
    set((state) => ({
      skills: state.skills.filter((s) => s !== skill),
    })),
}));