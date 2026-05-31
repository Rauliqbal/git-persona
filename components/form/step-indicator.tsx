"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
  steps: string[];
}

const descriptions = [
  "Tell us about yourself",
  "Portfolio, blog, resume",
  "Social media profiles",
  "Technologies you know",
  "Review & generate",
];

export default function StepIndicator({
  currentStep,
  steps,
}: StepIndicatorProps) {
  return (
    <div className="mb-10 flex items-center justify-center overflow-x-auto px-4">
      <div className="flex items-start min-w-max">
        {steps.map((step, index) => {
          const stepNumber = index + 1;

          const isActive =
            currentStep === stepNumber;

          const isCompleted =
            currentStep > stepNumber;

          return (
            <div
              key={step}
              className="flex min-w-max items-center"
            >
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full border-2 font-semibold transition-all",
                    isActive &&
                    "border-primary bg-primary text-primary-foreground",
                    isCompleted &&
                    "border-primary bg-primary text-primary-foreground",
                    !isActive &&
                    !isCompleted &&
                    "border-muted-foreground/30 text-muted-foreground"
                  )}
                >
                  {isCompleted ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    stepNumber
                  )}
                </div>

                <div className="mt-3 text-center">
                  <p
                    className={cn(
                      "text-sm font-medium",
                      isActive
                        ? "text-primary"
                        : "text-foreground"
                    )}
                  >
                    {step}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {descriptions[index]}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "mx-2 h-0.5 w-8 sm:mx-4 sm:w-12",
                    currentStep > stepNumber
                      ? "bg-primary"
                      : "bg-border"
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}