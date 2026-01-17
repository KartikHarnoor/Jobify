"use client";

import Image from "next/image";
import jobifylogo from "../../public/jobify-images/jobify-logo.png";
import {
    ChevronDown,
    User,
    Search,
    Building2,
    ChevronRight,
    Home,
    ChartNoAxesCombined,
    Laptop,
    Rocket,
} from "lucide-react";

export default function LandingPage() {
    return (
        <div className="w-full min-h-screen flex flex-col mb-2 p-2 sm:p-4 md:p-6 gap-8 md:gap-16">

            {/* Everything above footer wrapped in flex-grow */}
            <div className="flex-grow flex flex-col gap-8 md:gap-16">

                {/* Header */}
                <div className="w-full flex flex-row items-center justify-between gap-4 md:gap-10">
                    <div className="flex flex-row items-center justify-center gap-2 sm:gap-4">
                        <Image
                            src={jobifylogo}
                            alt="Jobify Logo"
                            className="w-7 h-10 sm:w-9 sm:h-12"
                        />
                        <div className="hidden md:flex flex-row items-center gap-1 font-poppins cursor-pointer">
                            About Us
                            <ChevronDown
                                className="w-4 h-4 text-[#11feb6] transition-transform duration-200 hover:scale-125"
                                strokeWidth={3}
                            />
                        </div>
                        <div className="hidden md:flex flex-row items-center gap-1 font-poppins cursor-pointer">
                            Companies
                            <ChevronDown
                                className="w-4 h-4 text-[#11feb6] transition-transform duration-200 hover:scale-125"
                                strokeWidth={3}
                            />
                        </div>
                        <div className="hidden md:flex flex-row items-center gap-1 font-poppins cursor-pointer">
                            Jobs
                            <ChevronDown
                                className="w-4 h-4 text-[#11feb6] transition-transform duration-200 hover:scale-125"
                                strokeWidth={3}
                            />
                        </div>
                    </div>

                    <div className="flex flex-row items-center gap-2 sm:gap-4">
                        <button className="bg-[#16303d] text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm">
                            Sign Up
                        </button>

                        <button className="hidden sm:block bg-[#11feb6] text-black px-4 py-2 rounded-full text-sm">
                            Log In
                        </button>

                        <button className="bg-[#11feb6] text-black p-2 rounded-full">
                            <User className="w-5 h-5 sm:w-6 sm:h-6" fill="black" />
                        </button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full flex flex-col gap-2 text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
                        Find Your Dream Job now
                    </div>
                    <div className="text-sm md:text-md font-normal">
                        Find opportunities that match your skills.
                    </div>
                    <div className="text-sm md:text-md font-normal">
                        Take the next step in your career with
                    </div>
                    <div className="text-sm md:text-md font-normal">confidence</div>
                </div>

                {/* SearchBar */}
                <div className="w-full sm:w-3/4 mx-auto flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4 bg-[#f2faf8] rounded-2xl md:rounded-full p-3 shadow-2xl">
                    <Search className="hidden md:block w-6 h-6 text-[#16303d] m-2" />

                    <div className="flex flex-row items-center flex-1 gap-3 bg-white md:bg-transparent rounded-full md:rounded-none p-2 md:p-0">
                        <input
                            type="text"
                            placeholder="Enter Skills / Jobs / Companies"
                            className="flex-1 outline-none bg-transparent text-xs"
                        />
                        <div className="hidden md:block h-8 w-[1px] bg-[#16303d]" />
                    </div>

                    <div className="flex flex-row items-center flex-1 gap-3 bg-white md:bg-transparent rounded-full md:rounded-none p-2 md:p-0">
                        <input
                            type="text"
                            placeholder="Enter Experience"
                            className="flex-1 outline-none bg-transparent text-xs"
                        />
                        <div className="hidden md:block h-8 w-[1px] bg-[#16303d]" />
                    </div>

                    <div className="flex flex-row items-center flex-1 gap-3 bg-white md:bg-transparent rounded-full md:rounded-none p-2 md:p-0">
                        <input
                            type="text"
                            placeholder="Enter Location"
                            className="flex-1 outline-none bg-transparent text-xs"
                        />
                    </div>

                    <div className="flex-1 flex items-center justify-end">
                        <button className="bg-[#16303d] text-white px-4 py-2 rounded-full text-sm w-full md:w-auto">
                            Search
                        </button>
                    </div>
                </div>

                {/* Chip sections */}
                <div
                    className="
          w-[90%] sm:w-[80%] md:w-3/4 
          mx-auto 
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row 
          gap-4 sm:gap-6 md:gap-8 
          lg:items-center lg:justify-center
        "
                >
                    <div className="flex flex-row gap-2 items-center justify-center bg-white rounded-md p-2 shadow-lg cursor-pointer transition-transform duration-200 hover:scale-125">
                        <Building2 className="w-8 h-8" />
                        <span className="text-xs">MNC</span>
                        <ChevronRight className="w-4 h-4 text-[#11feb6]" />
                    </div>

                    <div className="flex flex-row gap-2 items-center justify-center bg-white rounded-md p-2 shadow-lg cursor-pointer transition-transform duration-200 hover:scale-125">
                        <Home className="w-8 h-8" />
                        <span className="text-xs">Remote</span>
                        <ChevronRight className="w-4 h-4 text-[#11feb6]" />
                    </div>

                    <div className="flex flex-row gap-2 items-center justify-center bg-white rounded-md p-2 shadow-lg cursor-pointer transition-transform duration-200 hover:scale-125">
                        <ChartNoAxesCombined className="w-8 h-8" />
                        <span className="text-xs">Marketing</span>
                        <ChevronRight className="w-4 h-4 text-[#11feb6]" />
                    </div>

                    <div className="flex flex-row gap-2 items-center justify-center bg-white rounded-md p-2 shadow-lg cursor-pointer transition-transform duration-200 hover:scale-125">
                        <Laptop className="w-8 h-8" />
                        <span className="text-xs">Software Development</span>
                        <ChevronRight className="w-4 h-4 text-[#11feb6]" />
                    </div>

                    <div className="flex flex-row gap-2 items-center justify-center bg-white rounded-md p-2 shadow-lg cursor-pointer transition-transform duration-200 hover:scale-125">
                        <Rocket className="w-8 h-8" />
                        <span className="text-xs">Startup</span>
                        <ChevronRight className="w-4 h-4 text-[#11feb6]" />
                    </div>
                </div>
            </div>

            {/* Footer (stays at bottom) */}
            <div className="hidden md:block w-[90%] h-[1px] bg-[#868585] mx-auto"></div>

            <div className="
                            w-full 
                            flex flex-col sm:flex-row 
                            items-center 
                            justify-center 
                            gap-4 sm:gap-8 md:gap-12 
                            text-sm text-gray-600
">
                <span className="cursor-pointer hover:text-black">Privacy Policy</span>
                <span className="cursor-pointer hover:text-black">Contact Us</span>
                <span className="cursor-pointer hover:text-black">Help</span>
                <span className="cursor-pointer hover:text-black">Terms and Conditions</span>
                <span className="cursor-pointer hover:text-black">Credits</span>
            </div>

        </div>
    );
}
