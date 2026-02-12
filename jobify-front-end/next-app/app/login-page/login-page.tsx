"use client";
import React from "react";
import LoginCard from "./login-card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


export default function LoginPage() {
    const router = useRouter();
    return (
        <div className="flex flex-col w-full bg-background-secondary h-screen items-center justify-between">
            <div className="flex flex-row w-full items-center justify-between bg-background pr-2 shadow-md">
                <div className="flex flex-row gap-2 items-center">
                    <Image src="/jobify-images/jobify-logo.png" alt="Jobify Logo" width={40} height={60} className="w-10 h-12 ml-2 mt-2" />
                    <div className="font-semibold text-lg">
                        Jobify
                    </div>
                </div>
                <Button variant="default" onClick={() => router.push('/signup-page')}>Sign Up</Button>
            </div>
            <LoginCard />
            <div className="pb-4 text-sm text-gray-500">
                Jobify &copy; 2026. All rights reserved.
            </div>
        </div>
    )
}
