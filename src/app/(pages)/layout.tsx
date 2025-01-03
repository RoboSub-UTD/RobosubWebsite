import React from 'react';
import type { Metadata } from 'next';
import { Providers } from '../../../providers';
import Navbar from './components/navbar';
import '../globals.css';

export const metadata: Metadata = {
  title: 'RoboSub UTD',
  description: 'RoboSub club at the University of Texas at Dallas',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar/> 
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
