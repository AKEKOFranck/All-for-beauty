import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { siteConfig, whatsappLink } from "@/lib/siteConfig";

export const metadata = {
  title: "Contact",
  description: `Contactez ${siteConfig.name} sur WhatsApp ou Facebook, ou retrouvez-nous sur la carte.`,
  alternates: { canonical: "/contact" },
};

const channels = {
  whatsapp: { icon: FaWhatsapp, title: "WhatsApp", text: "Posez vos questions ou passez commande, nous répondons rapidement.", cta: "Écrire sur WhatsApp" },
  facebook: { icon: FaFacebookF, title: "Facebook", text: "Suivez nos nouveautés et nos conseils beauté.", cta: "Voir notre page" },
};

export default function Contact() {
  const cards = [
    ...siteConfig.socials.map((so) => ({
      key: so.id,
      ...channels[so.id],
      href: so.href === "WHATSAPP" ? whatsappLink() : so.href,
    })),
    { key: "map", icon: FiMapPin, title: "Nous trouver", text: "Retrouvez notre adresse sur la carte.", cta: "Ouvrir la carte", href: siteConfig.mapUrl },
  ];

  return (
    <div className="container">
      <header className="page-head">
        <span className="eyebrow">Contact</span>
        <h1 className="title">Parlons de votre beauté</h1>
        <p className="lead">Choisissez le canal qui vous convient, nous serons ravis de vous répondre.</p>
      </header>
      <div className="grid-auto">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.key} className="panel">
              <Icon size={26} color="var(--accent)" />
              <h3 style={{ marginTop: ".8rem" }}>{c.title}</h3>
              <p>{c.text}</p>
              <a className="btn btn-primary" target="_blank" rel="noopener noreferrer" href={c.href}>{c.cta}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}