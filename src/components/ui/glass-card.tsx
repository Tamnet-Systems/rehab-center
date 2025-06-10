import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  blur?: "sm" | "md" | "lg";
  opacity?: "light" | "medium" | "heavy";
  border?: boolean;
  shadow?: boolean;
}

export const GlassCard = ({
  children,
  className,
  blur = "md",
  opacity = "medium",
  border = true,
  shadow = true,
}: GlassCardProps) => {
  // Map blur values to tailwind classes
  const blurMap = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
  };

  // Map opacity values to tailwind classes
  const opacityMap = {
    light: "bg-white/30",
    medium: "bg-white/50",
    heavy: "bg-white/70",
  };

  return (
    <div
      className={cn(
        "rounded-xl",
        blurMap[blur],
        opacityMap[opacity],
        border && "border border-white/30",
        shadow && "shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
}; 