import Link from "next/link";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FiHeart, FiMapPin } from "react-icons/fi";
import { PiLeafLight } from "react-icons/pi";
import Brand from "@/components/Brand/brand";
import { getCategories } from "@/lib/products";
import { siteConfig, whatsappLink } from "@/lib/siteConfig";
import s from "./footer.module.css";

const icons = { facebook: FaFacebookF, whatsapp: FaWhatsapp };

export default function Footer() {
  const categories = getCategories();
  return (
    <footer className={s.footer}>
      <div className={`container ${s.grid}`}>
        <div>
          <Brand />
          <p className={s.about}>{siteConfig.description}</p>
          <div className={s.socials}>
            {siteConfig.socials.map((so) => {
              const Icon = icons[so.id];
              return (
                <a key={so.id} href={so.href === "WHATSAPP" ? whatsappLink() : so.href}
                  target="_blank" rel="noopener noreferrer" aria-label={so.label}>
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h4>Navigation</h4>
          <ul className={s.list}>
            {siteConfig.nav.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
            <li><Link href="/panier">Mon panier</Link></li>
            <li>
              <a href={siteConfig.mapUrl} target="_blank" rel="noopener noreferrer" className={s.map}>
                <FiMapPin size={14} /> Nous trouver sur la carte
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Catégories</h4>
          <ul className={s.list}>
            {categories.length > 0 ? (
              categories.map((c) => (
                <li key={c.slug}><Link href={`/products?cat=${c.slug}`}>{c.label}</Link></li>
              ))
            ) : (
              <li><Link href="/products">Tous les produits</Link></li>
            )}
          </ul>
        </div>
      </div>

      <div className={s.signature}>
        <PiLeafLight size={22} />
        <FiHeart size={14} />
        <span className="script">{siteConfig.name} – {siteConfig.tagline}</span>
        <FiHeart size={14} />
        <PiLeafLight size={22} />
      </div>
      <div className={s.bottom}>© {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.</div>
    </footer>
  );
}