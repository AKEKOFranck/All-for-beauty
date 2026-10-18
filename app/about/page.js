import Image from "next/image";
import Link from "next/link";
import { FiHeart, FiShield, FiStar } from "react-icons/fi";
import { siteConfig } from "@/lib/siteConfig";
import s from "./page.module.css";

export const metadata = {
  title: "À propos",
  description: `Découvrez l'univers ${siteConfig.name} : une boutique de cosmétiques et un salon qui sélectionnent des soins de qualité pour votre peau et vos cheveux.`,
  alternates: { canonical: "/about" },
};

const values = [
  { icon: FiStar, title: "Qualité", text: "Chaque produit est choisi avec exigence pour ses résultats." },
  { icon: FiHeart, title: "Proximité", text: "Un accompagnement chaleureux, du conseil jusqu’à la livraison." },
  { icon: FiShield, title: "Transparence", text: "Des informations claires pour choisir en toute confiance." },
];

export default function About() {
  return (
    <div className="container">
      <header className="page-head">
        <span className="eyebrow">À propos</span>
        <h1 className="title">{siteConfig.about.title}</h1>
        <p className="lead">{siteConfig.about.quote}.</p>
      </header>

      <section className={s.story}>
        <div className={s.img}>
          <Image src={siteConfig.aboutImage} alt={siteConfig.name} fill sizes="(max-width:820px) 100vw, 45vw" />
        </div>
        <div>
          <h2 className="title">Notre démarche</h2>
          <p className="lead">{siteConfig.about.text}</p>
          <Link href="/products" className="btn btn-primary">Découvrir la boutique</Link>
        </div>
      </section>

      <section className={s.values}>
        {values.map(({ icon: Icon, title, text }) => (
          <div key={title} className={s.card}>
            <span><Icon size={22} /></span>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}