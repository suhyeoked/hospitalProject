import "@/styles/globals.css";
import { Inter ,  Noto_Sans_KR } from "next/font/google"
import type { AppProps } from "next/app";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const noto  = Noto_Sans_KR({ subsets: ["latin"], weight: ["400","700"], variable: "--font-noto", display: "swap" });


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${noto.variable}`}>
      <Component {...pageProps} />
    </main>
);
}
