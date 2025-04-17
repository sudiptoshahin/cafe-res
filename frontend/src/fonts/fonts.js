import { Montserrat, Playfair } from "next/font/google";

export const getMontserrat = {
    variable: "--font-montserrat",
    subsets: ["latin"],
}

export const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
})

export const getPlayfair = {
    variable: "--font-playfair",
    subsets: ["latin"],
}