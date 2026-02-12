import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputProps {
    label?: string;
    type: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    labelClassName?: string;
    inputClassName?: string;
    required: boolean;
}

function Input({
    label,
    type,
    placeholder,
    value,
    onChange,
    labelClassName,
    inputClassName,
    required,
}: InputProps) {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";

    return (
        <div className={cn("flex flex-col gap-1 w-full")}>
            {label && (
                <label className={cn("text-sm font-medium text-gray-700", labelClassName)}>
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}
            <div className="relative w-full">
                <input
                    type={isPassword && showPassword ? "text" : type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={cn(
                        "w-full rounded-md border bg-gray-100 border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-10 px-3 py-2",
                        isPassword && "pr-10", // Add padding-right for the icon
                        inputClassName
                    )}
                    
                />
                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(prev => !prev)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                        tabIndex={-1}
                    >
                        {showPassword ? (
                            <Eye className="h-5 w-5" />
                        ) : (
                            <EyeOff className="h-5 w-5" />
                        )}
                    </button>
                )}
            </div>
        </div>
    );
}

export default Input;