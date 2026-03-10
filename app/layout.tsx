import type {Metadata} from 'next';
import {ReactNode} from 'react';
export const metadata: Metadata = {
  metadataBase: new URL('https://yoursite.com'),
  title: 'Giovani Alencoi',
  description: 'Professional portfolio and personal website',
  icons: {
    icon: '/favicon.ico',
  },
  other:
  {
    "color-scheme": "light",
  }
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {
  return <>{children}</>;
}
