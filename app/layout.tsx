import type { Metadata } from "next";
import "./globals.css";

// המסגרת של כל הדפים באתר.
// כל דף (page.tsx) מוצג בתוך המסגרת הזאת, במקום שכתוב בו {children}.

// הכותרת שמופיעה בלשונית של הדפדפן
export const metadata: Metadata = {
  title: "האתר שלי",
  description: "האתר הראשון שלי בקורס סטרטאפיסטים",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // lang="he" ו-dir="rtl": האתר בעברית, מימין לשמאל
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
