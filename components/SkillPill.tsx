import React from 'react';

interface SkillPillProps {
  icon: React.ReactNode;
  label: string;
}

export const SkillPill: React.FC<SkillPillProps> = ({ icon, label }) => {
  // Clone the icon element to override its size for consistency within the pill.
  const sizedIcon = React.isValidElement<{ className?: string }>(icon)
    ? React.cloneElement(icon, { className: 'w-5 h-5' })
    : icon;

  return (
    <div className="flex items-center gap-2 bg-primary/10 text-primary font-semibold text-sm px-4 py-2 rounded-full border border-primary/20 transition-colors hover:bg-primary/20">
      {sizedIcon}
      <span>{label}</span>
    </div>
  );
};