"use client";

import { useEffect, useState } from "react";
import localFont from "next/font/local";
import "@coreui/coreui/dist/css/coreui.min.css";
import "@/sass/general.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
