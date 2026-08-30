import type { Metadata } from "next";
import { Inconsolata, Ubuntu } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { SoundProvider } from "@/components/providers/sound-provider";
import "./globals.css";
import { SITE_URL } from "@/constants";
import MouseEffects from "@/components/mouse-effects";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Inconsolata — used for everything (links, content, nav)
const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Frederick Vigilia — Software Developer",
    template: "%s | Frederick Vigilia",
  },
  description:
    "Frederick Vigilia is a full stack developer based in Manila, Philippines, specializing in mobile and web apps with React, Next.js, and Flutter.",
  keywords: [
    "Frederick Vigilia",
    "Software Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Flutter",
    "Manila",
    "Philippines",
    "Web Developer",
    "Mobile Developer",
  ],
  authors: [{ name: "Frederick Vigilia" }],
  creator: "Frederick Vigilia",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Frederick Vigilia — Software Developer",
    description:
      "Full stack developer based in Manila, Philippines. Building mobile and web apps with React, Next.js, and Flutter.",
    siteName: "Frederick Vigilia",
    images: [
      { url: "/me.jpg", width: 1200, height: 630, alt: "Frederick Vigilia" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frederick Vigilia — Software Developer",
    description:
      "Full stack developer based in Manila, Philippines. Building mobile and web apps.",
    images: ["/me.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inconsolata.variable} ${ubuntu.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body>
        <link rel="preload" as="image" href="/me.jpg" />
        <link rel="preload" as="image" href="/image.jpeg" />
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
        >
          <SoundProvider>
            <MouseEffects interactionMode="particles" duration={0.3}>
              <Navbar />
              {children}
              <Footer />
            </MouseEffects>
          </SoundProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
