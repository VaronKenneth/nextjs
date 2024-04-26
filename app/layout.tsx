import { AldrichFont } from './ui/fonts';
import './ui/global.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${AldrichFont.className} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
