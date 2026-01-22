"use-client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation"
import { post } from "../lib/api";

export default function LoginCard() {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

        const router = useRouter();

    const handleLogin = async () => {
        setLoading(true);
        setError("");

        try {
            const res = await post("/login", {
                username,
                password,
            })
            console.log(res);
            router.push('/landing-page')

        } catch (err: any) {
          console.log(err.message);
        } finally {
            setLoading(false);
        }
    };

    // async function loadData(){
    //     const res = await 


    return (

        <div className="flex flex-col items-start justify-start bg-white rounded-2xl shadow-lg">
            <Image src="/jobify-images/jobify-logo.png" alt="Jobify Logo" width={40} height={60} className="w-10 h-15 ml-2 mt-2" />
            <div className="flex flex-col items-center pl-8 pr-8 pb-8">
                {/* Header */}
                <div className="flex flex-row items-center mb-8">
                    <div className="font-poppins font-semibold text-5xl">
                        Jobify
                    </div>
                </div>
                {/* Login form */}
                <div className="w-full flex flex-row items-center gap-4 border border-[#efefef] bg-[#efefef] rounded-full px-4 py-2 mb-6">
                    <Mail className="h-8 w-8" />
                    <input
                        type="text"
                        placeholder="Email/Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full bg-transparent border-none outline-none mx-2 my-2"
                    />
                </div>
                <div className="w-full flex flex-row items-center gap-4 border border-[#efefef] bg-[#efefef] rounded-full px-4 py-2 mb-6">
                    <Lock className="h-8 w-8" />
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-transparent border-none outline-none mx-2 my-2"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(prev => !prev)}
                    >
                        {
                            showPassword ? <Eye className="h-6 w-6 cursor-pointer text-gray-400" /> : <EyeOff className="h-6 w-6 cursor-pointer text-gray-400" />
                        }
                    </button>
                </div>
                {error && (
                    <div className="text-red-500 text-sm mb-4 font-poppins">
                        {error}
                    </div>
                )}
                <button
                    type="submit"
                    onClick={handleLogin}
                    className="w-full font-poppins font-semibold bg-[#16303d] text-white rounded-full py-4 mb-6 hover:cursor-pointer hover:bg-[#0f202a]"
                >
                    {loading ? "Logging in..." : "Log In"}
                </button>

                <div className="w-full flex flex-row gap-2 items-center justify-center mb-6">
                    <div className="w-full h-[1px] bg-gray-400"></div>
                    <div className="text-gray-400 font-light font-poppins">or</div>
                    <div className="w-full h-[1px] bg-gray-400"></div>
                </div>

                <div className="w-full flex flex-row items-center justify-center gap-2 mb-6">
                    <div className="font-poppins text-sm">New to Jobify?</div>
                    <button className="font-poppins text-sm font-semibold hover:cursor-pointer hover:text-[#0f202a]"
                        onClick={() => router.push('/signup-page')}
                    >
                        Create an account
                    </button>
                </div>
            </div>
        </div>
    )
}