import { ReactNode, useState, useRef, MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
  glareEnabled?: boolean;
  perspective?: number;
  scale?: number;
  transitionSpeed?: number;
  borderRadius?: string;
}

export const TiltCard = ({
  children,
  className,
  tiltAmount = 10,
  glareEnabled = true,
  perspective = 1000,
  scale = 1.05,
  transitionSpeed = 0.2,
  borderRadius = "1rem",
}: TiltCardProps) => {
  const [tiltStyle, setTiltStyle] = useState({
    transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
    glarePosition: { x: 50, y: 50 },
  });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation based on mouse position
    const rotateY = ((x - centerX) / centerX) * tiltAmount;
    const rotateX = -((y - centerY) / centerY) * tiltAmount;

    // Calculate glare position
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTiltStyle({
      transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
      glarePosition: { x: glareX, y: glareY },
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      glarePosition: { x: 50, y: 50 },
    });
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn("relative overflow-hidden", className)}
      style={{
        transformStyle: "preserve-3d",
        borderRadius,
        willChange: "transform",
        transition: `transform ${transitionSpeed}s ease-out`,
        transform: tiltStyle.transform,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {glareEnabled && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${tiltStyle.glarePosition.x}% ${tiltStyle.glarePosition.y}%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 80%)`,
            borderRadius,
            transition: `opacity ${transitionSpeed}s ease-out`,
          }}
        />
      )}
      {children}
    </motion.div>
  );
}; 