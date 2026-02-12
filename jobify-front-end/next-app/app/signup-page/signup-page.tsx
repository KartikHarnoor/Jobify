"use client";

import react from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import SignupCard from "./signup-card";
export default function SignupPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-background-secondary">
      
      {/* Header */}
      <div className="flex items-center justify-between bg-background px-4 py-3 shadow-md">
        <div className="flex gap-2 items-center">
          <Image
            src="/jobify-images/jobify-logo.png"
            alt="Jobify Logo"
            width={40}
            height={60}
            className="w-10 h-12"
          />
          <div className="font-semibold text-lg">Jobify</div>
        </div>

        <div className="flex gap-2 items-center">
          <div className="text-xs text-gray-500">
            Already have an account?
          </div>

          <Button
            variant="secondary"
            onClick={() => router.push("/")}
          >
            Login
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-10">
        <SignupCard />
      </div>

      {/* Footer */}
      <div className="text-center pb-4 text-sm text-gray-500">
        Jobify © 2026. All rights reserved.
      </div>
    </div>
  );
}
