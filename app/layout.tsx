import "../global.css";
import { Space_Grotesk, DM_Serif_Display } from "@next/font/google";

import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "jwidener-portfolio",
    template: "%s",
  },
  description: "Seasoned UI/UX Developer who crafts great user experiences!",
  openGraph: {
    title: "jwidener-portfolio",
    description:
      "Seasoned UI/UX Developer who crafts great user experiences!",
    url: "",
    siteName: "",
    images: [
      {
        url: "",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spaceGrotesk",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dmSerif",
  weight: "400"
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[spaceGrotesk.variable, dmSerif.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
