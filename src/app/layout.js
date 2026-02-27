import './globals.css';
import Header from '@/layouts/header/header';
import Footer from '@/layouts/footer/footer';
import FloatingContact from '@/components/floating-contact/floating-contact';
import BackToTop from '@/components/back-to-top/back-to-top';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['200', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://lttnelectric.vn';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'LTTN Electric - Chuyên biến tần, HMI, PLC, Cảm biến Nhật Bản',
    template: '%s | LTTN Electric',
  },
  description:
    'LTTN Electric chuyên kinh doanh biến tần, HMI, PLC, cảm biến Mitsubishi, Fuji. Cung cấp sản phẩm chính hãng, thi công lắp đặt tại TPHCM.',
  keywords: [
    'biến tần',
    'biến tần Nhật',
    'HMI',
    'PLC',
    'cảm biến',
    'Mitsubishi',
    'Fuji',
    'LTTN Electric',
    'thiết bị điện công nghiệp',
  ],
  authors: [{ name: 'LTTN Electric' }],
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    siteName: 'LTTN Electric',
    title: 'LTTN Electric - Chuyên biến tần, HMI, PLC, Cảm biến Nhật Bản',
    description:
      'Chuyên kinh doanh biến tần, HMI, PLC, cảm biến Mitsubishi, Fuji. Cung cấp sản phẩm chính hãng, thi công lắp đặt tại TPHCM.',
    url: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className={`${montserrat.className} antialiased`}>
        <Header />
        <div id="main-content">{children}</div>
        <Footer />
        <FloatingContact />
        <BackToTop />
      </body>
    </html>
  );
}
