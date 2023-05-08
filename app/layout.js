import './globals.css';
import { Barlow } from 'next/font/google';
import Navbar from './navbar';
import Footer from './footer';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  display: 'swap',
});

export const metadata = {
  title: 'Cyber Security Services Indonesia | Jayanta',
  description:
    'We provide Cyber Security Services to help prevent and stop cyber-attacks against your organisation.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='id'>
      <body
        className={
          barlow.className +
          ' scroll-smooth bg-brand-bluedark text-white text-lg antialiased'
        }
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
