import React, { ReactNode } from 'react';

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassPanel: React.FC<GlassPanelProps> = ({ children, className = '', hoverEffect = false }) => {
  return (
    <div 
      className={`
        bg-white/60 backdrop-blur-md border border-white/40 shadow-lg rounded-2xl
        transition-all duration-300
        ${hoverEffect ? 'hover:bg-white/80 hover:shadow-xl hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};