import "@/app/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schenmazon",
  description: "We make you cry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="m-auto min-w-[300px] max-w-7xl p-4">{children}</main>
    </>
  );
}
