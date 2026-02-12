"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation"
import { post } from "../lib/api";
import Input from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginCard() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const router = useRouter();

    const handleLogin = async () => {
        setLoading(true);
        setError("");

        if (!username || !password) {
            setError("Please fill the Credentials")
            return;
        }

        try {
            const res = await post("/login", {
                username,
                password,
            })
            console.log(res);
            router.push('/landing-page')

        } catch (err: any) {
            setError("Invalid Credentials");
            console.log(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-8 items-center justify-center bg-background w-full max-w-md p-8 rounded-md shadow-2xl">
            <div className="bg-green-100 p-4 rounded-full mb-2">
                <Lock className="h-8 w-8" />
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
                <div className="font-bold text-4xl">
                    Welcome Back
                </div>
                <div className="font-normal text-sm text-gray-500">
                    Sign in to manage your hiring flow
                </div>
            </div>
            <div className="flex flex-col gap-6 items-center justify-center w-full">
                <Input
                    label="Email/Username"
                    type="text"
                    placeholder="Email/Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    labelClassName="font-semibold text-sm"
                    required={true}
                />

                <Input
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    labelClassName="font-semibold text-sm"
                    required={true}
                />
            </div>
            {error && (
                <div className="w-full text-red-500 text-sm text-center">
                    {error}
                </div>
            )}
            <Button variant="default" className="w-full h-10 hover:cursor-pointer" onClick={handleLogin} disabled={loading}>
                {loading ? "Signing in..." : "Sign in"}
            </Button>
            <div className="flex flex-row gap-2">
                <div className="font-poppins text-sm">New to Jobify?</div>
                <button className="font-poppins text-sm font-semibold hover:cursor-pointer hover:text-[#0f202a]"
                    onClick={() => router.push('/signup-page')}
                >
                    Create an account
                </button>
            </div>
        </div>
    )
}