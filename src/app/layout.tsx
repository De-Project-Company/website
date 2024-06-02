import type { Metadata } from 'next';
import '../styles/globals.scss';
import StateContextProvider from '@/context/StateCtx';
import { nunito, workSans, poppins, rama, jaka, podkova } from '@/font';
import { Toaster } from '@/components/ui/toaster';
import MemberContextProvider from '@/context/MemberCtx';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASEURL as string),
  applicationName: 'Starters House',
  authors: [
    {
      name: 'starters house team',
      url: `${process.env.NEXT_PUBLIC_BASE}/teams`
    }
  ],
  generator: 'Next.js,',
  keywords: [
    'Next.js',
    'React',
    'project-management',
    'startershouse',
    'community',
    'tech development'
  ],
  referrer: 'origin',
  creator: 'starters house team',
  title: {
    default: 'Starters House Community',
    template: `%s - Starterhiuse`
  },
  description:
    "Starters House Community is a thriving ecosystem for tech enthusiasts and professionals. It's a place where innovation, collaboration, and growth are part of everyday life.",
  twitter: {
    title: 'Starters House Community',
    card: 'summary_large_image'
  },
  openGraph: {
    title: 'Starters House Community',
    description:
      "Starters House Community is a thriving ecosystem for tech enthusiasts and professionals. It's a place where innovation, collaboration, and growth are part of everyday life.",
    url: process.env.NEXT_PUBLIC_BASEURL,
    siteName: 'STARTERSHOUSE',
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StateContextProvider>
        <MemberContextProvider>
          <body
            className={`${nunito.variable} ${workSans.variable} ${poppins.variable} ${rama.variable} ${jaka.className} ${podkova.variable} `}
          >
            {children}
            <Toaster />
          </body>
        </MemberContextProvider>
      </StateContextProvider>
    </html>
  );
}
