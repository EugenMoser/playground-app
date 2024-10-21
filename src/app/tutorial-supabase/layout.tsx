import type { Metadata } from 'next';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'Supabase',
  description: 'experience the power of Supabase',
};

export default function SupabaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Toaster
          richColors
          position='top-right'
        />
        {children}
      </body>
    </html>
  );
}
