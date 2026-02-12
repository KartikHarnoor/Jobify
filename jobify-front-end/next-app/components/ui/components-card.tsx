"use client";

import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CustomCardProps {
    icon: React.ReactNode;
    title: string;
    value?: string | number;
    subtitle?: string;
    trend?: number;
    titleClassName?: string;
    subtitleClassName?: string;
    onClick?: () => void;
    selected?: boolean;
}

export default function CustomCard({
    icon,
    title,
    value,
    subtitle,
    trend,
    titleClassName,
    subtitleClassName,
    onClick,
    selected,
}: CustomCardProps) {

    const showTrend = typeof trend === "number";
    const isPositive = showTrend && trend >= 0;
    //const isClickable = typeof onClick === "function";

    return (
        <div
            onClick={onClick}
            className={cn(
                "flex flex-col justify-between p-6 rounded-2xl w-full max-w-sm transition border",
                selected
                    ? "bg-green-50 border-green-500 shadow-lg"
                    : "bg-background border-transparent hover:shadow-md cursor-pointer"
            )}
        >


            {/* Top Section */}
            <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-background-secondary rounded-xl">
                    {icon}
                </div>

                {showTrend && (
                    <div
                        className={cn(
                            "flex items-center gap-1 text-sm font-medium",
                            isPositive ? "text-green-600" : "text-red-600"
                        )}
                    >
                        {isPositive ? (
                            <ArrowUpRight className="w-4 h-4" />
                        ) : (
                            <ArrowDownRight className="w-4 h-4" />
                        )}
                        {Math.abs(trend)}%
                    </div>
                )}
            </div>

            {/* Middle Section */}
            <div className="flex flex-col gap-1">
                <div className={cn("text-sm text-gray-500", titleClassName)}>
                    {title}
                </div>

                {value !== undefined && (
                    <div className="text-3xl font-semibold">{value}</div>
                )}
            </div>

            {/* Bottom Section */}
            {subtitle && (
                <div className={cn("text-xs text-gray-400 mt-2", subtitleClassName)}>
                    {subtitle}
                </div>
            )}
        </div>
    );
}
