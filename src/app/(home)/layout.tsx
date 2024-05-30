import { Suspense } from "react";
import { NavigationBar } from "@/components/navigation";

export default function ModeratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense>
        <NavigationBar />
      </Suspense>
      {children}
    </>
  );
}
