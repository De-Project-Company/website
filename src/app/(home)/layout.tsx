import { Suspense } from 'react';
import { NavigationBar } from '@/components/navigation';
import { MOBILENAVBAR } from '@/components/navigation/Mobile';
export default function ModeratorLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense>
        <NavigationBar />
      </Suspense>
      <MOBILENAVBAR />
      {children}
    </>
  );
}
