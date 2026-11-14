import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`space-y-4 max-w-2xl flex flex-col ${alignClasses[align]} ${className}`}>
      {badge && (
        <span className="text-blue-600 font-extrabold text-xs tracking-widest uppercase">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
