import React from "react";

interface BattlegroundProps {
  children: React.ReactNode;
}

export function Grid({ children }: BattlegroundProps) {
  return (
    <div className="relative">
      <div className="absolute inset-0 [transform-style:preserve-3d] [transform:rotateX(60deg)_rotateY(0deg)_rotateZ(45deg)] blur-xl bg-blue-600/30" />
      <div className="border border-green-600/60 [transform-style:preserve-3d] [transform:rotateX(60deg)_rotateY(0deg)_rotateZ(45deg)]">
        {children}
      </div>
    </div>
  );
}

export function Row({ children }: BattlegroundProps) {
  return <div className="flex h-[250px] w-[250px] pointer-events-none">{children}</div>;
}
