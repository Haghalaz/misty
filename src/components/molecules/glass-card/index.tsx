import { ReactNode } from "react";

export default function GlassCard({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-400/10 w-max px-4 py-2 rounded-sm bg-clip-padding backdrop-filter backdrop-blur-md border border-gray-100/10">
      {children}
    </div>
  );
}
