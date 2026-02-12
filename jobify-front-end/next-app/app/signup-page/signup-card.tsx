"use client";

import react, { useState } from "react";
import Input from "@/components/ui/input";
import CustomCard from "@/components/ui/components-card";
import { UserSearch } from "lucide-react";
import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { post } from "../lib/api";

export default function SignupCard() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [passwordHash, setPasswordHash] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [type, setType] = useState<string | null>(null);
    const [companyName, setCompanyName] = useState("");
    const [userName, setUserName] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    const router = useRouter();

    const handleSignup = async () => {
        setError("");

        if (!fullName || !email || !passwordHash || !userName || !type) {
            setError("Please fill all required fields.");
            return;
        }

        if (passwordHash !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (type === "Employer" && !companyName) {
            setError("Company name is required for employers.");
            return;
        }

        try {
            setLoading(true);

            await post("/signup", {
                fullName,
                email,
                passwordHash,
                type,
                companyName,
                userName,
                phone,
            });

            router.push("/login");
        } catch (err: any) {
            setError(err.message);
            console.log(err.message);
        }finally {
            setLoading(false);
        }
    };


    return (
        <div className="flex flex-col gap-8 items-center justify-center">
            {/* Header */}
            <div className="flex flex-col gap-4 items-center justify-center">
                <div className="font-bold text-4xl">
                    Create your account
                </div>
                <div className="font-normal text-sm text-gray-500">
                    Sign up to manage your hiring flow
                </div>
            </div>

            {/* Input fields */}
            <div className="flex flex-col gap-6 items-center justify-center bg-background w-full max-w-2xl p-8 rounded-md shadow-2xl">
                <div className="flex flex-row gap-6 w-full">
                    <Input
                        label="Full Name"
                        type="text"
                        placeholder="Full Name"
                        onChange={(e) => setFullName(e.target.value)}
                        required={false}
                        labelClassName="font-semibold text-sm"
                    />
                    <Input
                        label="Email Address"
                        type="text"
                        placeholder="Email Address"
                        onChange={(e) => setEmail(e.target.value)}
                        required={false}
                        labelClassName="font-semibold text-sm"
                    />
                </div>

                <div className="flex flex-row gap-6 w-full">
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPasswordHash(e.target.value)}
                        required={false}
                        labelClassName="font-semibold text-sm"
                    />
                    <Input
                        label="Confirm Password"
                        type="password"
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required={false}
                        labelClassName="font-semibold text-sm"
                    />
                </div>
                <div className="flex flex-row gap-6 w-full">
                    <Input
                        label="Username"
                        type="text"
                        placeholder="Username"
                        onChange={(e) => setUserName(e.target.value)}
                        required={false}
                        labelClassName="font-semibold text-sm"
                    />
                    <Input
                        label="Phone Number"
                        type="text"
                        placeholder="Phone Number"
                        onChange={(e) => setPhone(e.target.value)}
                        required={false}
                        labelClassName="font-semibold text-sm"
                    />
                </div>
            </div>
            <div className="font-bold text-xl">
                How would you like to join?
            </div>
            <div className="flex flex-row gap-6 items-center justify-center w-full max-w-2xl">
                <CustomCard
                    icon={<UserSearch className="w-6 h-6 " />}
                    title="I am a Job Seeker"
                    subtitle="I want to find my dream Job, showcase my skills and get hired"
                    titleClassName="font-semibold text-xl text-black"
                    subtitleClassName="font-normal text-xs text-gray-500"
                    onClick={() => setType("JOB_SEEKER")}
                    selected={type === "JOB_SEEKER"}
                />
                <CustomCard
                    icon={<Building2 className="w-6 h-6" />}
                    title="I am an Employer"
                    subtitle="I want to post jobs, manage applications and hire the best talent"
                    titleClassName="font-semibold text-xl text-black"
                    subtitleClassName="font-normal text-xs text-gray-500"
                    onClick={() => setType("Employer")}
                    selected={type === "Employer"}
                />
            </div>

            {type === "Employer" && (
                <div className="flex flex-col gap-6 items-center justify-center bg-background w-full max-w-2xl p-8 rounded-md shadow-2xl">

                    <Input
                        label="Company Name"
                        type="text"
                        placeholder="Company Name"
                        onChange={(e) => setCompanyName(e.target.value)}
                        required={false}
                        labelClassName="font-semibold text-sm"
                    />
                </div>
            )}
            {error && (
                <div className="text-red-500 text-sm font-medium">
                    {error}
                </div>
            )}


            <Button
                variant="default"
                className="w-[80%] h-10 hover:cursor-pointer"
                onClick={handleSignup}
                disabled={loading}
            >
                {loading ? "Creating Account..." : "Sign Up"}
            </Button>

        </div>
    )
}
