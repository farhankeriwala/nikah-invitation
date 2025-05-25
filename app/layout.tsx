import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Nikah & Walima Invitation – Humza & Farheen",
    description:
        "You're cordially invited to the Nikah and Walima ceremony of Humza and Farheen. View details and RSVP online.",
    openGraph: {
        title: "Nikah & Walima Invitation – Humza & Farheen",
        description:
            "Join us in celebrating the blessed union of Humza & Farheen. Tap to view invitation details, venue, and RSVP.",
        url: "https://nikah-invitation.vercel.app/",
        type: "website",
        images: [
            {
                url: "https://nikah-invitation.vercel.app/banner.png", // ✅ correct if it's directly in /public
                width: 1200,
                height: 630,
                alt: "Humza & Farheen Nikah Invitation",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Nikah & Walima Invitation – Humza & Farheen",
        description: "You're invited! View the full invitation and RSVP online.",
        images: ["https://nikah-invitation.vercel.app/banner.png"],
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}