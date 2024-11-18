<<<<<<< HEAD
=======
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
>>>>>>> 7c37f6a (Add dashboard)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body>{children}</body>
    </html>
  );
}
=======
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
>>>>>>> 7c37f6a (Add dashboard)
