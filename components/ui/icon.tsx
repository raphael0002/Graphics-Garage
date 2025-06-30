"use client"

import { Megaphone, PenTool, Sparkles, Globe, Layout, Smartphone, type LucideIcon } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
    Megaphone,
    PenTool,
    Sparkles,
    Globe,
    Layout,
    Smartphone,
}

interface IconProps {
    name: string
    className?: string
    size?: number
}

export const Icon = ({ name, className = "", size }: IconProps) => {
    const IconComponent = iconMap[name]

    if (!IconComponent) {
        console.warn(`Icon "${name}" not found in iconMap`)
        return <div className={`w-6 h-6 bg-gray-300 rounded ${className}`} />
    }

    const props: { className: string; size?: number } = { className }
    if (size) {
        props.size = size
    }

    return <IconComponent {...props} />
}

export { iconMap }
