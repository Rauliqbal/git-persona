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

export default function ProfileForm() {
  const {
    step,
    nextStep,
    prevStep,

    fullName,
    subtitle,
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
  ];

  const handleAddSkill = () => {
    if (!skillInput.trim()) return;

    addSkill(skillInput.trim());
    setSkillInput("");
  };

  return (
    <div className="p-8">
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

          {/* Step Indicator */}
          <StepIndicator currentStep={step} steps={steps} />

          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-4">

              <Input
                placeholder="John Doe"
                value={fullName}
                onChange={(e) =>
                  setFullName(e.target.value)
                }
              />

              <Input
                placeholder="Full Stack Developer"
                value={subtitle}
                onChange={(e) =>
                  setSubtitle(e.target.value)
                }
              />

              <Textarea
                placeholder="About yourself..."
                value={summary}
                onChange={(e) =>
                  setSummary(e.target.value)
                }
              />

              <Textarea
                placeholder="Fun fact..."
                value={funFact}
                onChange={(e) =>
                  setFunFact(e.target.value)
                }
              />

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

          {/* Navigation */}
          <div className="mt-8 flex justify-between">

            <Button
              variant="outline"
              disabled={step === 1}
              onClick={prevStep}
            >
              Previous
            </Button>

            {step < 4 ? (
              <Button onClick={nextStep}>
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