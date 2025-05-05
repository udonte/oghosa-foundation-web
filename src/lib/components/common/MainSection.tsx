import { ReactNode } from "react";

export default function MainSection({ children }: { children: ReactNode }) {
  return <main className="w-full mx-auto min-h-screen">{children}</main>;
}
