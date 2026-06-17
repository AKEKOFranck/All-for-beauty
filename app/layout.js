import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation/navigation";
import Footer from "./components/Footer/footer";

/* =========================
   TYPOGRAPHIES COSMÉTIQUES
========================= */
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/* =========================
   METADATA SITE
========================= */
export const metadata = {
  title: "All For Beauty | Beauté & Soins Naturels Premium",

  description:
    "All For Beauty est une boutique en ligne spécialisée dans les soins de beauté, crèmes, huiles et produits cosmétiques naturels adaptés à tous les types de peau.",

  keywords: [
    "all for beauty",
    "soins de beauté",
    "produits cosmétiques",
    "crèmes visage",
    "huile de beauté",
    "skincare Afrique",
    "cosmétique naturel",
  ],

  authors: [{ name: "All For Beauty" }],
  creator: "All For Beauty",

  openGraph: {
    title: "All For Beauty | Beauté & Soins Naturels",
    description:
      "Découvrez des produits cosmétiques naturels et premium pour sublimer votre peau au quotidien.",
    url: "",
    siteName: "All For Beauty",
    locale: "fr_FR",
    type: "website",

    images: [
      {
        url: "/logoCos.jpg",
        width: 1200,
        height: 630,
        alt: "All For Beauty",
      },
    ],
  },

  icons: {
    icon: [
      { url: "/logoCos.ico", type: "image/x-icon" },
      { url: "/logoCos.svg", type: "image/svg+xml" },
      { url: "/logoCos.jpg", type: "image/jpeg" },
    ],
    shortcut: "/logoCos.ico",
    apple: "/logoCos.jpg",
  },
};

/* =========================
   ROOT LAYOUT
========================= */
export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${poppins.variable} ${playfair.variable}`}>
      <body>
        <Navigation />

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}