import '../css/root.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer/Footer';
import NavBar from '@/components/Navbar/Navbar';
import TopArrow from '@/components/Utilities/TopArrow';
import { Metadata } from 'next';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'], weight: '300' });

export const metadata: Metadata = {
  title: 'Betwave',
  description: 'Generated by create next app',
  icons: 'favicon3.ico',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <ClerkProvider>
        <body className={inter.className}>
          <NavBar />
          {children}
          <TopArrow />
          <Footer />
        </body>
      </ClerkProvider>
    </html>
  );
}
