"use client";

import { useState } from "react";

import { useProfileStore } from "@/store/profile";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import StepIndicator from "./step-indicator";
import PreviewPanel from "../preview/preview-panel";
import { Field, FieldGroup, FieldLabel } from "../ui/field";

export default function ProfileForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const {
    step,
    nextStep,
    prevStep,

    fullName,
    subtitle,
    currLearning,
    summary,
    funFact,

    portfolioUrl,
    blogUrl,
    resumeUrl,

    github,
    linkedin,
    twitter,
    instagram,

    skills,

    setFullName,
    setSubtitle,
    setCurrLearning,
    setSummary,
    setFunFact,

    setPortfolioUrl,
    setBlogUrl,
    setResumeUrl,

    setGithub,
    setLinkedin,
    setTwitter,
    setInstagram,

    addSkill,
    removeSkill,
  } = useProfileStore();

  const [skillInput, setSkillInput] = useState("");

  const steps = [
    "Profile",
    "Links",
    "Socials",
    "Skills",
    "Preview",
  ];

  const handleAddSkill = () => {
    if (!skillInput.trim()) return;

    addSkill(skillInput.trim());
    setSkillInput("");
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!fullName.trim()) {
        newErrors.fullName = "Full name is required";
      }

      if (!subtitle.trim()) {
        newErrors.subtitle = "Subtitle is required";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateStep()) return;

    nextStep();
  };

  return (
    <div className="p-8">
      <StepIndicator currentStep={step} steps={steps} />

      <Card>
        <CardHeader>
          <CardTitle>
            Build your profile
          </CardTitle>

          <CardDescription>
            Complete the fields below to generate
            your custom GitHub README.
          </CardDescription>
        </CardHeader>

        <CardContent>
          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-4">

              <FieldGroup className="grid md:grid-cols-2 gap-4">
                <Field data-invalid={!!errors.fullName}>
                  <FieldLabel htmlFor="yourname">Yourname <span className="text-destructive">*</span></FieldLabel>
                  <Input
                    id="yourname"
                    type="text"
                    placeholder="John Doe"
                    required
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);

                      if (errors.fullName) {
                        setErrors((prev) => ({
                          ...prev,
                          fullName: "",
                        }));
                      }
                    }}
                  />

                  {errors.fullName && (
                    <p className="mt-1 text-sm text-destructive">
                      {errors.fullName}
                    </p>
                  )}
                </Field>

                <Field data-invalid={!!errors.subtitle}>
                  <FieldLabel htmlFor="subtitle">Subtitle <span className="text-destructive">*</span></FieldLabel>
                  <Input
                    id="subtitle"
                    type="text"
                    placeholder="a Full Stack Developer"
                    required
                    value={subtitle}
                    onChange={(e) => {
                      setSubtitle(e.target.value)

                      if (errors.subtitle) {
                        setErrors((prev) => ({
                          ...prev,
                          subtitle: "",
                        }));
                      }
                    }}
                  />
                  {errors.subtitle && (
                    <p className="mt-1 text-sm text-destructive">
                      {errors.subtitle}
                    </p>
                  )}
                </Field>
              </FieldGroup>

              <Field >
                <FieldLabel htmlFor="summary">💬 summary </FieldLabel>
                <Textarea
                  placeholder="Brief description about yourself and what you're passionate about..."
                  value={summary}
                  onChange={(e) =>
                    setSummary(e.target.value)
                  }
                />
              </Field>

              <Field >
                <FieldLabel htmlFor="currLearning">🌱 I&apos;m currently learning</FieldLabel>
                <Textarea
                  placeholder="RESTFul APIs, GraphQL, and cloud deployment..."
                  value={currLearning}
                  onChange={(e) =>
                    setCurrLearning(e.target.value)
                  }
                />
              </Field>

              <Field >
                <FieldLabel htmlFor="funFact">⚡ Fun fact </FieldLabel>
                <Textarea
                  placeholder="I like to drink coffee while coding..."
                  value={funFact}
                  onChange={(e) =>
                    setFunFact(e.target.value)
                  }
                />
              </Field>


            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-4">

              <Input
                placeholder="Portfolio URL"
                value={portfolioUrl}
                onChange={(e) =>
                  setPortfolioUrl(e.target.value)
                }
              />

              <Input
                placeholder="Blog URL"
                value={blogUrl}
                onChange={(e) =>
                  setBlogUrl(e.target.value)
                }
              />

              <Input
                placeholder="Resume URL"
                value={resumeUrl}
                onChange={(e) =>
                  setResumeUrl(e.target.value)
                }
              />

            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-4">

              <Input
                placeholder="GitHub Username"
                value={github}
                onChange={(e) =>
                  setGithub(e.target.value)
                }
              />

              <Input
                placeholder="LinkedIn Username"
                value={linkedin}
                onChange={(e) =>
                  setLinkedin(e.target.value)
                }
              />

              <Input
                placeholder="Twitter / X Username"
                value={twitter}
                onChange={(e) =>
                  setTwitter(e.target.value)
                }
              />

              <Input
                placeholder="Instagram Username"
                value={instagram}
                onChange={(e) =>
                  setInstagram(e.target.value)
                }
              />

            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="space-y-4">

              <div className="flex gap-2">

                <Input
                  placeholder="Next.js"
                  value={skillInput}
                  onChange={(e) =>
                    setSkillInput(e.target.value)
                  }
                />

                <Button
                  type="button"
                  onClick={handleAddSkill}
                >
                  Add
                </Button>

              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    className="cursor-pointer"
                    onClick={() =>
                      removeSkill(skill)
                    }
                  >
                    {skill} ✕
                  </Badge>
                ))}
              </div>

            </div>
          )}

          {/* STEP 5 */}
          {step === 5 && (
            <div className="space-y-4">
              <PreviewPanel />
            </div>
          )}

          {/* Navigation */}
          <div className="mt-8 flex justify-between">

            <Button
              variant="outline"
              disabled={step === 1}
              onClick={prevStep}
            >
              Previous
            </Button>

            {step < 5 ? (
              <Button onClick={handleNext}>
                Next
              </Button>
            ) : (
              <Button>
                Generate README
              </Button>
            )}

          </div>

        </CardContent>
      </Card>
    </div>
  );
}