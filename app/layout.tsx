import "@/app/ui/global.css";
import { inter, lusitana, roboto } from "@/app/ui/fonts";
// import { Metadata } from "next";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Acme Dashboard",
//   description: "The official Next.js Course Dashboard, built with App Router.",
//   metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
// };

export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

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
