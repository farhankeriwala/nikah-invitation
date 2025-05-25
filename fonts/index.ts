import {Parisienne, Karla} from "next/font/google";

export const parisienne = Parisienne({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-parisienne",
    display: "swap",
})

export const karla = Karla({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-karla",
    display: "swap",
})