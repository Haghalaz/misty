import { ReactNode } from "react";

export default function GlassCardIcon({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`5 grid aspect-square w-max min-w-16 place-content-center rounded-full border border-gray-100/50 bg-transparent backdrop-blur-lg ${className}`}
    >
      {children}
    </div>
  );
}
