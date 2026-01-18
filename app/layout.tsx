import "@/app/ui/global.css";
import { inter,lusitana,roboto } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${lusitana.className} ${inter.className} ${roboto.className} antialiased w-10/12 mx-auto`}
      >
        {children}
      </body>
      {/* <body className={`${inter.className} antialiased`}>{children}</body> */}
      {/* <body className={`${lusitana.className} antialiased`}>{children}</body> */}
      {/* <body className={`${roboto.className} antialiased`}>{children}</body> */}
    </html>
  );
}


//  