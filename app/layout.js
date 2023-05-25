import './globals.css';
import { Barlow, Inter } from 'next/font/google';
import Navbar from './navbar';
import Drawer from './drawer';
import Footer from './footer';
import Script from 'next/script';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  display: 'swap',
});

export const metadata = {
  title: 'Solusi Keamanan Siber | Jayanta.id',
  description:
    'Kami menawarkan berbagai layanan yang dirancang untuk memenuhi kebutuhan keamanan siber perusahaan Anda, sehingga Anda dapat fokus pada pertumbuhan bisnis dengan tenang.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='id'>
      <Script
        id='gtm-script'
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id='gtm-tag' strategy='lazyOnload'>
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
      <body
        className={
          inter.className +
          ' scroll-smooth bg-brand-bluenight text-white text-lg antialiased'
        }
      >
        <div className='drawer drawer-end'>
          <input id='menu-drawer' type='checkbox' className='drawer-toggle' />
          <div className='drawer-content flex flex-col overflow-x-hidden'>
            <Navbar />
            {children}
            <Footer />
          </div>
          <Drawer />
        </div>
      </body>
    </html>
  );
}
