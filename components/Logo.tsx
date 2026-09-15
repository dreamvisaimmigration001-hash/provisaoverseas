import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function Logo({
  className = "w-full h-auto",
  width = 500,
  height = 200,
  priority = false,
}: LogoProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      <Image
        src="/logo.png"
        alt="Pro Visa Overseas Logo"
        width={width}
        height={height}
        priority={priority}
        className="w-full h-auto object-contain"
      />
    </div>
  );
}
