import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/redux/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en" data-theme="light">
        <body className={inter.className}>
          <ToastContainer />
          <div className="max-w-7xl mx-auto p-4">{children}</div>
        </body>
      </html>
    </Providers>
  );
}
