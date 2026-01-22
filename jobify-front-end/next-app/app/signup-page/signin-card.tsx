

"use client";
import Image from "next/image";
import jobifyLogo from "@/public/jobify-images/jobify-logo.png";
import { User, Mail, Circle, Lock, Eye, EyeOff } from "lucide-react"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SigninCard() {


    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    return (
        <div className="flex flex-col items-start justify-start bg-white rounded-2xl shadow-lg 
                w-full max-w-md sm:max-w-lg">
            <Image src={jobifyLogo} alt="Jobify Logo" className="w-10 h-15 ml-2 mt-2" />
            <div className="flex flex-col items-center pl-8 pr-8 pb-8">
                {/* Header */}
                <div className="flex flex-row items-center mb-8">
                    <div className="font-poppins font-semibold text-5xl">
                        Jobify
                    </div>
                </div>

                <div className="font-poppins text-xl mb-6">Create your account</div>

                <div className="w-full flex flex-row items-center gap-4 bg-[#efefef] rounded-full px-4 mb-6">
                    <User className="h-8 w-8 ml-2" />
                    <input
                        type="text"
                        placeholder="Full Name"
                        className=" w-full bg-transparent border-none outline-none mx-2 my-2"
                    />
                </div>
                <div className="w-full flex flex-row items-center gap-4 bg-[#efefef] rounded-full px-4 mb-6">
                    <Mail className="h-8 w-8 ml-2" />
                    <input
                        type="text"
                        placeholder="Email"
                        className=" w-full bg-transparent border-none outline-none mx-2 my-2"
                    />
                </div>
                <div className="w-full flex flex-row items-center justify-center gap-4 mb-6">
                    <div className="w-full flex flex-row items-center justify-start gap-2 bg-[#efefef] rounded-full px-4 py-2">
                        <Circle className="w-5 h-5" />
                        <div className="font-poppins text-sm">Job Seeker</div>
                    </div>
                    <div className="w-full flex flex-row items-center justify-start gap-2 bg-[#efefef] rounded-full px-4 py-2">
                        <Circle className="w-5 h-5" />
                        <div className="font-poppins text-sm">Employer</div>
                    </div>
                </div>

                <div className="w-full flex flex-row items-center justify-center gap-4 mb-6">
                    <div className="w-full flex flex-row items-center justify-center gap-2 bg-[#efefef] rounded-full px-4 py-2">
                        <Lock className="w-5 h-5" />
                        <input
                            type= {showPassword ? "text" : "password"}
                            placeholder="Password"
                            className=" w-full bg-transparent border-none outline-none"
                        />
                        <button 
                            onClick={() => setShowPassword(prev => !prev)}
                        >
                            {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                        </button>

                    </div>
                    <div className="w-full flex flex-row items-center justify-center gap-2 bg-[#efefef] rounded-full px-4 py-2">
                        <Lock className="w-5 h-5" />
                        <input
                            type= {showPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            className=" w-full bg-transparent border-none outline-none"
                        />
                        <button 
                            onClick={() => setShowPassword(prev => !prev)}
                        >
                            {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                        </button>

                    </div>
                </div>

                <div className="w-full flex flex-row items-center justify-start gap-3 mb-6 ml-2">
                    <input
                        type="checkbox"
                        className="w-5 h-5"
                    />
                    <label className="font-poppins">
                        I agree to the Terms & Conditions
                    </label>
                </div>

                <button
                    type="submit"
                    className="w-full font-poppins font-semibold bg-[#16303d] text-white rounded-full py-4 mb-6 hover:cursor-pointer hover:bg-[#0f202a]"
                >
                    Create Account
                </button>
                <div className="w-full flex flex-row items-center justify-center gap-2 mb-4">
                    <div className="font-poppins text-sm">Already have an account?</div>
                    <button className="font-poppins text-sm font-semibold hover:cursor-pointer hover:text-[#0f202a]"
                        onClick= {() => router.push('/landing-page')}
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    )
}