

// "use client";
// import Image from "next/image";
// import jobifyLogo from "@/public/jobify-images/jobify-logo.png";
// import { User, Mail, Circle, Lock, Eye, EyeOff } from "lucide-react"
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export default function SigninCard() {


//     const [showPassword, setShowPassword] = useState(false);
//     const router = useRouter();
//     return (
//         <div className="flex flex-col items-start justify-start bg-white rounded-2xl shadow-lg 
//                 w-full max-w-md sm:max-w-lg">
//             <Image src={jobifyLogo} alt="Jobify Logo" className="w-10 h-15 ml-2 mt-2" />
//             <div className="flex flex-col items-center pl-8 pr-8 pb-8">
//                 {/* Header */}
//                 <div className="flex flex-row items-center mb-8">
//                     <div className="font-poppins font-semibold text-5xl">
//                         Jobify
//                     </div>
//                 </div>

//                 <div className="font-poppins text-xl mb-6">Create your account</div>

//                 <div className="w-full flex flex-row items-center gap-4 bg-[#efefef] rounded-full px-4 mb-6">
//                     <User className="h-8 w-8 ml-2" />
//                     <input
//                         type="text"
//                         placeholder="Full Name"
//                         className=" w-full bg-transparent border-none outline-none mx-2 my-2"
//                     />
//                 </div>
//                 <div className="w-full flex flex-row items-center gap-4 bg-[#efefef] rounded-full px-4 mb-6">
//                     <Mail className="h-8 w-8 ml-2" />
//                     <input
//                         type="text"
//                         placeholder="Email"
//                         className=" w-full bg-transparent border-none outline-none mx-2 my-2"
//                     />
//                 </div>
//                 <div className="w-full flex flex-row items-center justify-center gap-4 mb-6">
//                     <div className="w-full flex flex-row items-center justify-start gap-2 bg-[#efefef] rounded-full px-4 py-2">
//                         <Circle className="w-5 h-5" />
//                         <div className="font-poppins text-sm">Job Seeker</div>
//                     </div>
//                     <div className="w-full flex flex-row items-center justify-start gap-2 bg-[#efefef] rounded-full px-4 py-2">
//                         <Circle className="w-5 h-5" />
//                         <div className="font-poppins text-sm">Employer</div>
//                     </div>
//                 </div>

//                 <div className="w-full flex flex-row items-center justify-center gap-4 mb-6">
//                     <div className="w-full flex flex-row items-center justify-center gap-2 bg-[#efefef] rounded-full px-4 py-2">
//                         <Lock className="w-5 h-5" />
//                         <input
//                             type= {showPassword ? "text" : "password"}
//                             placeholder="Password"
//                             className=" w-full bg-transparent border-none outline-none"
//                         />
//                         <button 
//                             onClick={() => setShowPassword(prev => !prev)}
//                         >
//                             {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
//                         </button>

//                     </div>
//                     <div className="w-full flex flex-row items-center justify-center gap-2 bg-[#efefef] rounded-full px-4 py-2">
//                         <Lock className="w-5 h-5" />
//                         <input
//                             type= {showPassword ? "text" : "password"}
//                             placeholder="Confirm Password"
//                             className=" w-full bg-transparent border-none outline-none"
//                         />
//                         <button 
//                             onClick={() => setShowPassword(prev => !prev)}
//                         >
//                             {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
//                         </button>

//                     </div>
//                 </div>

//                 <div className="w-full flex flex-row items-center justify-start gap-3 mb-6 ml-2">
//                     <input
//                         type="checkbox"
//                         className="w-5 h-5"
//                     />
//                     <label className="font-poppins">
//                         I agree to the Terms & Conditions
//                     </label>
//                 </div>

//                 <button
//                     type="submit"
//                     className="w-full font-poppins font-semibold bg-[#16303d] text-white rounded-full py-4 mb-6 hover:cursor-pointer hover:bg-[#0f202a]"
//                 >
//                     Create Account
//                 </button>
//                 <div className="w-full flex flex-row items-center justify-center gap-2 mb-4">
//                     <div className="font-poppins text-sm">Already have an account?</div>
//                     <button className="font-poppins text-sm font-semibold hover:cursor-pointer hover:text-[#0f202a]"
//                         onClick= {() => router.push('/landing-page')}
//                     >
//                         Sign In
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }
"use client";
import Image from "next/image";
import jobifyLogo from "@/public/jobify-images/jobify-logo.png";
import { User, Mail, Circle, Lock, Eye, EyeOff, Phone, CircleDot, Building } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { post } from "../lib/api";

export default function SigninCard() {
    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [form, setForm] = useState({
        username: "",
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        password: "",
        confirmPassword: "",
        type: "", // default
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        setIsLoading(true);

        const payload = {
            userName: form.username,
            fullName: form.fullName,
            email: form.email,
            phone: form.phone,
            companyName: form.companyName,
            passwordHash: form.password,
            type: form.type,
        };

        try {
            await post("/signup", payload);
            //alert("Account created successfully!");
            router.push("/landing-page");
        } catch (error) {
            alert("Error creating account: " + (error instanceof Error ? error.message : "Unknown error"));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-start justify-start bg-white rounded-2xl shadow-lg 
        w-full max-w-md sm:max-w-lg">
            <Image src={jobifyLogo} alt="Jobify Logo" className="w-10 h-15 ml-2 mt-2" />

            <div className="flex flex-col items-center pl-8 pr-8 pb-8">
                <div className="flex flex-row items-center mb-8">
                    <div className="font-poppins font-semibold text-5xl">Jobify</div>
                </div>

                <div className="font-poppins text-xl mb-6">Create your account</div>

                {/* Username */}
                <div className="w-full flex flex-row items-center gap-4 bg-[#efefef] rounded-full px-4 mb-6">
                    <User className="h-8 w-8 ml-2" />
                    <input
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        type="text"
                        placeholder="Username"
                        className="w-full bg-transparent border-none outline-none mx-2 my-2"
                    />
                </div>

                {/* Full name */}
                <div className="w-full flex flex-row items-center gap-4 bg-[#efefef] rounded-full px-4 mb-6">
                    <User className="h-8 w-8 ml-2" />
                    <input
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        type="text"
                        placeholder="Full Name"
                        className="w-full bg-transparent border-none outline-none mx-2 my-2"
                    />
                </div>

                {/* Email */}
                <div className="w-full flex flex-row items-center gap-4 bg-[#efefef] rounded-full px-4 mb-6">
                    <Mail className="h-8 w-8 ml-2" />
                    <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Email"
                        className="w-full bg-transparent border-none outline-none mx-2 my-2"
                    />
                </div>

                {/* Phone */}
                <div className="w-full flex flex-row items-center gap-4 bg-[#efefef] rounded-full px-4 mb-6">
                    <Phone className="h-8 w-8 ml-2" />
                    <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        type="text"
                        placeholder="Phone"
                        className="w-full bg-transparent border-none outline-none mx-2 my-2"
                    />
                </div>

                {/* Company Name - only show for employers */}
                {form.type === "EMPLOYER" && (
                    <div className="w-full flex flex-row items-center gap-4 bg-[#efefef] rounded-full px-4 mb-6">
                        <Building className="h-8 w-8 ml-2" />
                        <input
                            name="companyName"
                            value={form.companyName}
                            onChange={handleChange}
                            type="text"
                            placeholder="Company Name"
                            className="w-full bg-transparent border-none outline-none mx-2 my-2"
                        />
                    </div>
                )}


                {/* Type selection */}
                <div className="w-full flex flex-row items-center justify-center gap-4 mb-6">
                    {/* Job Seeker */}
                    <div
                        onClick={() => setForm({ ...form, type: "JOB_SEEKER" })}
                        className="w-full flex items-center gap-2 bg-[#efefef] rounded-full px-4 py-2 cursor-pointer"
                    >
                        {form.type === "JOB_SEEKER" ? (
                            <CircleDot className="w-5 h-5 text-[#16303d]" />
                        ) : (
                            <Circle className="w-5 h-5 text-gray-400" />
                        )}
                        <div className="font-poppins text-sm">Job Seeker</div>
                    </div>

                    {/* Employer */}
                    <div
                        onClick={() => setForm({ ...form, type: "EMPLOYER" })}
                        className="w-full flex items-center gap-2 bg-[#efefef] rounded-full px-4 py-2 cursor-pointer"
                    >
                        {form.type === "EMPLOYER" ? (
                            <CircleDot className="w-5 h-5 text-[#16303d]" />
                        ) : (
                            <Circle className="w-5 h-5 text-gray-400" />
                        )}
                        <div className="font-poppins text-sm">Employer</div>
                    </div>

                </div>



                {/* Passwords */}
                <div className="w-full flex flex-row items-center justify-center gap-4 mb-6">
                    <div className="w-full flex items-center gap-2 bg-[#efefef] rounded-full px-4 py-2">
                        <Lock className="w-5 h-5" />
                        <input
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="w-full bg-transparent border-none outline-none"
                        />
                        <button onClick={() => setShowPassword(p => !p)}>
                            {showPassword ? <Eye /> : <EyeOff />}
                        </button>
                    </div>

                    <div className="w-full flex items-center gap-2 bg-[#efefef] rounded-full px-4 py-2">
                        <Lock className="w-5 h-5" />
                        <input
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            type={showPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            className="w-full bg-transparent border-none outline-none"
                        />
                    </div>
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="w-full font-poppins font-semibold bg-[#16303d] text-white rounded-full py-4 mb-6 hover:bg-[#0f202a] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? "Creating Account..." : "Create Account"}
                </button>

                <div className="flex gap-2">
                    <div className="text-sm">Already have an account?</div>
                    <button
                        className="text-sm font-semibold"
                        onClick={() => router.push("/landing-page")}
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
}
