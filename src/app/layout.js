import './globals.css';
import Header from '@/layouts/header/header';
import Footer from '@/layouts/footer/footer';
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({
  weight: ['200', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});
export const metadata = {
  title: 'LTTN Electric',
  description: 'Chuyên biến tần Nhật',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
